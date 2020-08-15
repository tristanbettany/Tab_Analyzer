module.exports = {
    theme: {
        colors: {
            'transparent': 'transparent',
        
            'black': '#22292f',
            'grey-darkest': '#3d4852',
            'grey-darker': '#606f7b',
            'grey-dark': '#8795a1',
            'grey': '#b8c2cc',
            'grey-light': '#dae1e7',
            'grey-lighter': '#f1f5f8',
            'grey-lightest': '#f8fafc',
            'white': '#ffffff',
        
            'red-darkest': '#3b0d0c',
            'red-darker': '#621b18',
            'red-dark': '#cc1f1a',
            'red': '#e3342f',
            'red-light': '#ef5753',
            'red-lighter': '#f9acaa',
            'red-lightest': '#fcebea',
        
            'orange-darkest': '#462a16',
            'orange-darker': '#613b1f',
            'orange-dark': '#de751f',
            'orange': '#f6993f',
            'orange-light': '#faad63',
            'orange-lighter': '#fcd9b6',
            'orange-lightest': '#fff5eb',
        
            'yellow-darkest': '#453411',
            'yellow-darker': '#684f1d',
            'yellow-dark': '#f2d024',
            'yellow': '#ffed4a',
            'yellow-light': '#fff382',
            'yellow-lighter': '#fff9c2',
            'yellow-lightest': '#fcfbeb',
        
            'green-darkest': '#0f2f21',
            'green-darker': '#1a4731',
            'green-dark': '#1f9d55',
            'green': '#38c172',
            'green-light': '#51d88a',
            'green-lighter': '#a2f5bf',
            'green-lightest': '#e3fcec',
        
            'teal-darkest': '#0d3331',
            'teal-darker': '#20504f',
            'teal-dark': '#38a89d',
            'teal': '#4dc0b5',
            'teal-light': '#64d5ca',
            'teal-lighter': '#a0f0ed',
            'teal-lightest': '#e8fffe',
        
            'blue-darkest': '#12283a',
            'blue-darker': '#1c3d5a',
            'blue-dark': '#2779bd',
            'blue': '#3490dc',
            'blue-light': '#6cb2eb',
            'blue-lighter': '#bcdefa',
            'blue-lightest': '#eff8ff',
        
            'indigo-darkest': '#191e38',
            'indigo-darker': '#2f365f',
            'indigo-dark': '#5661b3',
            'indigo': '#6574cd',
            'indigo-light': '#7886d7',
            'indigo-lighter': '#b2b7ff',
            'indigo-lightest': '#e6e8ff',
        
            'purple-darkest': '#21183c',
            'purple-darker': '#382b5f',
            'purple-dark': '#794acf',
            'purple': '#9561e2',
            'purple-light': '#a779e9',
            'purple-lighter': '#d6bbfc',
            'purple-lightest': '#f3ebff',
        
            'pink-darkest': '#451225',
            'pink-darker': '#6f213f',
            'pink-dark': '#eb5286',
            'pink': '#f66d9b',
            'pink-light': '#fa7ea8',
            'pink-lighter': '#ffbbca',
            'pink-lightest': '#ffebef',

            'c-pink': '#EA2FBB',
            'c-pink-dark': '#901D73',
            'c-pink-darker': '#6B1656',
        },
        textColor: theme => theme('colors'),
        backgroundColor: theme => theme('colors'),
        borderColor: theme => ({
            default: theme('colors.grey-light'),
            ...theme('colors'),
        }),
        extend: {},
        fontSize: {
            //Pixels
            'basepx': '20px',  // 20px
            '15px': '15px',  // 15px
            '17px': '17px',  // 17px
            '18px': '18px',  // 18px
            '20px': '20px',  // 20px
            '22px': '22px',  // 20px
            '24px': '24px',  // 24px
            '26px': '26px',  // 24px
            '28px': '28px',  // 24px
            '30px': '30px',  // 30px
            '34px': '34px',  // 34px
            '38px': '38px',  // 38px
            '48px': '48px',  // 48px
            '50px': '50px',  // 50px
            '60px': '60px',    // 60px
            '75px': '75px', // 75px

            //Rems
            'reset': '0',       // 0
            'base': '1rem',     // 16px
            '15': '	0.9375rem', // 15px
            '17': '1.0625rem',  // 17px
            '18': '1.125rem',   // 18px
            '20': '1.25rem',   // 20px
            '22': '1.375em',     // 22px
            '24': '1.5rem',     // 24px
            '26': '1.625rem',   // 26px
            '30': '1.875rem',   // 30px
            '38': '2.375rem',   // 38px
            '48': '3rem',       // 48px
            '50': '3.125rem',   // 50px
            '60': '3.75rem',    // 60px
            '75': '4.688rem',    // 75px
        },
        fontWeight: {
            'hairline': 100,
            'thin': 200,
            'light': 300,
            'normal': 400,
            'medium': 500,
            'semibold': 600,
            'bold': 700,
            'extrabold': 800,
            'black': 900,
        },
        lineHeight: {
            'reset': 0,
            'none': 1,
            'tight': 1.25,
            'normal': 1.65,
            'loose': 2,
        
            // Pixels
            '5px': '5px',
            '10px': '10px',
            '15px': '15px',
            '20px': '20px',
            '25px': '25px',
            '30px': '30px',
            '35px': '35px',
            '40px': '40px',
            '45px': '45px',
            '50px': '50px',
            '55px': '55px',
            '60px': '60px',
            '65px': '65px',
            '70px': '70px',
            '75px': '75px',
            '80px': '80px',
            '85px': '85px',
            '90px': '90px',
            '95px': '95px',
            '100px': '100px',
        },
        width: {
            'auto': 'auto',
            'px': '1px',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem',
            '24': '6rem',
            '32': '8rem',
            '48': '12rem',
            '64': '16rem',
            'full': '100%',
            'screen': '100vw',
        
            //12 Col Grid
            '1/2': '50%',
            '1/3': '33.33333%',
            '2/3': '66.66667%',
            '1/4': '25%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.66667%',
            '5/6': '83.33333%',
            '1/12': '8.33%',
            '2/12': '16.66%',
            '5/12': '41.66%',
            '7/12': '58.33%',
            '8/12': '66.66667%',
            '9/12': '75%',
            '10/12': '83.33%',
            '11/12': '91.66%',
        
            //Pixel Width
            '5px': '5px',
            '10px': '10px',
            '15px': '15px',
            '20px': '20px',
            '25px': '25px',
            '30px': '30px',
            '35px': '35px',
            '40px': '40px',
            '45px': '45px',
            '50px': '50px',
            '55px': '55px',
            '60px': '60px',
            '65px': '65px',
            '70px': '70px',
            '75px': '75px',
            '80px': '80px',
            '85px': '85px',
            '90px': '90px',
            '95px': '95px',
            '100px': '100px',
            '115px': '115px',
            '125px': '125px',
            '130px': '130px',
            '145px': '145px',
            '150px': '150px',
            '160px': '160px',
            '165px': '165px',
            '170px': '170px',
            '180px': '180px',
            '200px': '200px',
            '220px': '220px',
            '240px': '240px',
            '250px': '250px',
            '270px': '270px',
            '300px': '300px',
            '350px': '350px',
            '400px': '400px',
            '450px': '450px',
            '500px': '500px',
        },
        height: {
            'auto': 'auto',
            'px': '1px',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem',
            '24': '6rem',
            '32': '8rem',
            '48': '12rem',
            '64': '16rem',
            'full': '100%',
            'screen': '100vh',
        
            //Pixel Height
            '5px': '5px',
            '10px': '10px',
            '15px': '15px',
            '20px': '20px',
            '25px': '25px',
            '30px': '30px',
            '35px': '35px',
            '40px': '40px',
            '45px': '45px',
            '50px': '50px',
            '55px': '55px',
            '60px': '60px',
            '65px': '65px',
            '70px': '70px',
            '75px': '75px',
            '80px': '80px',
            '85px': '85px',
            '90px': '90px',
            '95px': '95px',
            '100px': '100px',
            '115px': '115px',
            '130px': '130px',
            '140px': '140px',
            '145px': '145px',
            '150px': '150px',
            '165px': '165px',
            '200px': '200px',
            '250px': '250px',
            '300px': '300px',
            '350px': '350px',
            '400px': '400px',
            '450px': '450px',
            '500px': '500px',
            '600px': '600px',
        },
        minWidth: {
            '0': '0',
            'full': '100%',
        
            //Pixels
            '5px': '5px',
            '10px': '10px',
            '15px': '15px',
            '20px': '20px',
            '25px': '25px',
            '30px': '30px',
            '35px': '35px',
            '40px': '40px',
            '45px': '45px',
            '50px': '50px',
            '55px': '55px',
            '60px': '60px',
            '65px': '65px',
            '70px': '70px',
            '75px': '75px',
            '80px': '80px',
            '85px': '85px',
            '90px': '90px',
            '95px': '95px',
            '100px': '100px',
            '150px': '150px',
            '160px': '160px',
            '200px': '200px',
            '210px': '210px',
            '250px': '250px',
            '260px': '260px',
            '270px': '270px',
            '300px': '300px',
            '350px': '350px',
            '400px': '400px',
            '450px': '450px',
            '500px': '500px',
            '600px': '600px',
        },
        minHeight: {
            '0': '0',
            'full': '100%',
            'screen': '100vh',
        
            //Pixels
            '5px': '5px',
            '10px': '10px',
            '15px': '15px',
            '20px': '20px',
            '25px': '25px',
            '30px': '30px',
            '35px': '35px',
            '40px': '40px',
            '45px': '45px',
            '50px': '50px',
            '55px': '55px',
            '60px': '60px',
            '65px': '65px',
            '70px': '70px',
            '75px': '75px',
            '80px': '80px',
            '85px': '85px',
            '90px': '90px',
            '95px': '95px',
            '100px': '100px',
            '150px': '150px',
            '200px': '200px',
            '210px': '210px',
            '250px': '250px',
            '300px': '300px',
            '350px': '350px',
            '400px': '400px',
            '450px': '450px',
            '500px': '500px',
            '600px': '600px',
            '690px': '690px',
        },
        maxWidth: {
            'xs': '20rem',
            'sm': '30rem',
            'md': '40rem',
            'lg': '50rem',
            'xl': '60rem',
            '2xl': '70rem',
            '3xl': '80rem',
            '4xl': '90rem',
            '5xl': '100rem',
            'full': '100%',
        
            //Pixels
            '5px': '5px',
            '10px': '10px',
            '15px': '15px',
            '20px': '20px',
            '25px': '25px',
            '30px': '30px',
            '35px': '35px',
            '40px': '40px',
            '45px': '45px',
            '50px': '50px',
            '55px': '55px',
            '60px': '60px',
            '65px': '65px',
            '70px': '70px',
            '75px': '75px',
            '80px': '80px',
            '85px': '85px',
            '90px': '90px',
            '95px': '95px',
            '100px': '100px',
            '150px': '150px',
            '165px': '165px',
            '130px': '130px',
            '160px': '160px',
            '200px': '200px',
            '210px': '210px',
            '220px': '220px',
            '230px': '230px',
            '250px': '250px',
            '260px': '260px',
            '270px': '270px',
            '280px': '280px',
            '290px': '290px',
            '300px': '300px',
            '310px': '310px',
            '330px': '330px',
            '350px': '350px',
            '400px': '400px',
            '450px': '450px',
            '485px': '485px',
            '500px': '500px',
            '585px': '585px',
            '600px': '600px',
            '610px': '610px',
            '670px': '670px',
        },
        maxHeight: {
            'full': '100%',
            'screen': '100vh',
        
            //Pixels
            '5px': '5px',
            '10px': '10px',
            '13px': '13px',
            '15px': '15px',
            '20px': '20px',
            '25px': '25px',
            '30px': '30px',
            '35px': '35px',
            '40px': '40px',
            '45px': '45px',
            '50px': '50px',
            '55px': '55px',
            '60px': '60px',
            '65px': '65px',
            '70px': '70px',
            '75px': '75px',
            '80px': '80px',
            '85px': '85px',
            '90px': '90px',
            '95px': '95px',
            '100px': '100px',
            '120px': '120px',
            '140px': '140px',
            '145px': '145px',
            '150px': '150px',
            '160px': '160px',
            '165px': '165px',
            '200px': '200px',
            '250px': '250px',
            '270px': '270px',
            '300px': '300px',
            '320px': '320px',
            '350px': '350px',
            '400px': '400px',
            '450px': '450px',
            '500px': '500px',
            '830px': '830px',
        },
        padding: {
            'px': '1px',
            '0': '0',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem',
            '20': '5rem',
            '24': '6rem',
            '32': '8rem',
        
            //Pixel Padding
            '5px': '5px',
            '10px': '10px',
            '13px': '13px',
            '15px': '15px',
            '20px': '20px',
            '25px': '25px',
            '30px': '30px',
            '35px': '35px',
            '40px': '40px',
            '45px': '45px',
            '50px': '50px',
            '55px': '55px',
            '60px': '60px',
            '65px': '65px',
            '70px': '70px',
            '75px': '75px',
            '80px': '80px',
            '85px': '85px',
            '90px': '90px',
            '95px': '95px',
            '100px': '100px',
            '120px': '120px',
            '140px': '140px',
            '145px': '145px',
            '150px': '150px',
            '160px': '160px',
            '165px': '165px',
            '200px': '200px',
            '250px': '250px',
            '270px': '270px',
            '300px': '300px',
            '320px': '320px',
            '350px': '350px',
            '400px': '400px',
            '450px': '450px',
            '500px': '500px',
        
            //Percentage Padding
            '125%': '125%',
            '105%': '105%',
            '100%': '100%',
            '95%': '95%',
            '90%': '90%',
            '85%': '85%',
            '80%': '80%',
            '75%': '75%',
            '70%': '70%',
            '65%': '65%',
            '60%': '60%',
            '55%': '55%',
            '50%': '50%',
            '45%': '45%',
            '40%': '40%',
            '35%': '35%',
            '30%': '30%',
            '25%': '25%',
            '20%': '20%',
            '15%': '15%',
            '10%': '10%',
            '5%': '5%',
        },
        margin: {
            'auto': 'auto',
            'px': '1px',
            '0': '0',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem',
            '20': '5rem',
            '24': '6rem',
            '32': '8rem',
        
            //Pixel Margin
            '5px': '5px',
            '10px': '10px',
            '15px': '15px',
            '20px': '20px',
            '25px': '25px',
            '30px': '30px',
            '35px': '35px',
            '40px': '40px',
            '45px': '45px',
            '50px': '50px',
            '55px': '55px',
            '60px': '60px',
            '65px': '65px',
            '70px': '70px',
            '75px': '75px',
            '80px': '80px',
            '85px': '85px',
            '90px': '90px',
            '95px': '95px',
            '100px': '100px',
            '130px': '130px',
            '150px': '150px',
            '200px': '200px',
            '220px': '220px',
            '250px': '250px',
            '300px': '300px',
            '350px': '350px',
            '400px': '400px',
            '450px': '450px',
            '500px': '500px',
        
            '-px': '-1px',
            '-0': '-0',
            '-1': '-0.25rem',
            '-2': '-0.5rem',
            '-3': '-0.75rem',
            '-4': '-1rem',
            '-5': '-1.25rem',
            '-6': '-1.5rem',
            '-8': '-2rem',
            '-10': '-2.5rem',
            '-12': '-3rem',
            '-16': '-4rem',
            '-20': '-5rem',
            '-24': '-6rem',
            '-32': '-8rem',
        
            //Percentage Margin
            '-13%': '-13%',
        
            //Pixel Margin
            '-1px': '-1px',
            '-2px': '-2px',
            '-5px': '-5px',
            '-10px': '-10px',
            '-15px': '-15px',
            '-20px': '-20px',
            '-25px': '-25px',
            '-30px': '-30px',
            '-35px': '-35px',
            '-40px': '-40px',
            '-45px': '-45px',
            '-50px': '-50px',
            '-55px': '-55px',
            '-60px': '-60px',
            '-65px': '-65px',
            '-70px': '-70px',
            '-75px': '-75px',
            '-80px': '-80px',
            '-85px': '-85px',
            '-90px': '-90px',
            '-95px': '-95px',
            '-100px': '-100px',
            '-150px': '-150px',
            '-160px': '-160px',
            '-180px': '-180px',
            '-200px': '-200px',
            '-210px': '-210px',
            '-250px': '-250px',
            '-260px': '-260px',
            '-300px': '-300px',
            '-350px': '-350px',
            '-400px': '-400px',
            '-450px': '-450px',
            '-500px': '-500px',
        },
    },

    variants: {},
    plugins: []
}