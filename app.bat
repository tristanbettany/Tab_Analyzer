@ECHO OFF

CALL :CASE_%1
IF ERRORLEVEL 1 CALL :DEFAULT_CASE

ECHO Done!
EXIT /B

:CASE_install
    ECHO Removing temporary application files...
    @RD /S /Q "config_gen/vendor"
    ECHO Building...
    docker build -t tristanbettany:confgen .
    ECHO Install dependancies...
    docker run -it --rm -v %cd%:/app -w /app/config_gen tristanbettany:confgen composer install
    GOTO END_CASE

:CASE_phpshell
    docker run -it --rm -v %cd%:/app -w /app/config_gen tristanbettany:confgen php -a
    GOTO END_CASE

:CASE_bash
    docker run -it --rm -v %cd%:/app -w /app/config_gen tristanbettany:confgen bash
    GOTO END_CASE

:CASE_cg
    docker run -it --rm -v %cd%:/app -w /app/config_gen tristanbettany:confgen ./cli config:gen
    GOTO END_CASE

:DEFAULT_CASE
    ECHO Unknown function "%1"
    GOTO END_CASE
:END_CASE
    VER > NUL
    GOTO :EOF