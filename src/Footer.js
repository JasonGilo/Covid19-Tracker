import React from 'react';

function Footer() {
    // function getCurrentYear(){
    //     var year = new Date();
    //     return year.getFullYear();
    // }


    var style = {
        display:'flex', 
        justifyContent:'center', 
        height:'4rem',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'#302c2c',
        color:'white',
        fontSize: '1.1rem',
        marginTop:'0px'
    }

    return (<footer style={style}>
        <small>All Data Obtained from https://covid-19.mathdro.id/api</small>
        <small>Website Made By: Jason Gilo</small>
    </footer>);
}

export default Footer