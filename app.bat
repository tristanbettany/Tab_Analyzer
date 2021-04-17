@ECHO OFF

CALL :CASE_%1
IF ERRORLEVEL 1 CALL :DEFAULT_CASE

ECHO Done!
EXIT /B

:CASE_remove
    ECHO Removing...
    docker compose down -v
    GOTO END_CASE

:CASE_rebuild
    ECHO Removing...
    docker compose down -v
    ECHO Building...
    docker compose up -d --build
    GOTO END_CASE

:CASE_build
    ECHO Building...
    docker compose up -d --build
    GOTO END_CASE

:CASE_restart
    ECHO Stopping...
    docker compose down
    ECHO Starting...
    docker compose up -d
    GOTO END_CASE

:CASE_stop
    ECHO Stopping...
    docker compose down
    GOTO END_CASE

:CASE_start
    ECHO Starting...
    docker compose up -d
    GOTO END_CASE

:CASE_install
    ECHO Removing temporary application files...
    @RD /S /Q "config_gen/vendor"
    ECHO Install dependancies...
    docker container exec -w /www cgphp80 composer install
    GOTO END_CASE

:CASE_update
    ECHO Updating dependancies...
    docker container exec -w /www cgphp80 composer update
    GOTO END_CASE

:CASE_phpshell
    docker container exec -w /www cgphp80 php -a
    GOTO END_CASE

:CASE_bash
    docker container exec -it -w /www cgphp80 bash
    GOTO END_CASE

:CASE_bash-node
    docker container exec -it -w /app cgnode bash
    GOTO END_CASE

:CASE_cg
    docker container exec -it -w /www cgphp80 ./cli config:gen
    GOTO END_CASE

:DEFAULT_CASE
    ECHO Unknown function "%1"
    GOTO END_CASE
:END_CASE
    VER > NUL
    GOTO :EOF