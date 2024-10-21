import { createTheme } from "@mui/material";
import { Colors } from "../config/colors";

export const theme = createTheme({
    breakpoints:{
        values:{
            xs:0,
            sm:300,
            md:900,
            lg:1160,
            xl:15636,
    },},
typography:{
    h1:{
        fontWeight:800,
        fontSize:70,
        color:`${Colors.DarkGreen}`,
    },
    h2:{
        fontWeight:"800",
        fontSize:"50px",
        lineHeight:"58.59px",
        color:`${Colors.DarkGreen}`,
    },
    h3:{
        fontWeight:"800",
        fontSize:"40px",
        lineHeight:"46.88px",
        color:`${Colors.DarkGreen}`,
    },
    h4:{
        fontWeight:"800",
        fontSize:"35px",
        color:`${Colors.DarkGreen}`,
    },
    h5:{
        fontWeight:"800",
        fontSize:"30px",
        lineHeight:"35.16px",
        color:`${Colors.DarkGreen}`,
    },
    h6:{
        fontWeight:"800",
        fontSize:"25px",
        lineHeight:"29.3px",
        color:`${Colors.DarkGreen}`,
    },
    body1:{
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "23.44px",
        color:`${Colors.DarkGreen}`,
    },
    body2:{
        fontWeight:"400",
        fontSize: "16px",
        color: `${Colors.DarkGrey}`
    },
},
components: {
    MuiButton: {
        variants: [
            {
                props: { variant: "contained" },
                style: {
                    fontWeight: 700,
                    fontSize: "20px",
                    color: `#fff`,
                    padding: "28px 39px 28px 39px",
                    backgroundColor: `${Colors.DarkGreen}`,
                    borderRadius: "16px",
                },
            },
            {
                props: { variant: "outlined" },
                style: {
                    fontWeight: 700,
                    fontSize: "20px",
                    color: `${Colors.DarkGreen}`,
                    padding: "28px 39px 28px 39px",
                    backgroundColor: `#fff`,
                    borderRadius: "16px",
                    border: `1px solid ${Colors.DarkGreen}`,
                },
            },
        ],
    },


    MuiContainer: {
        styleOverrides: {
            maxWidthXs: {
                maxWidth: "1648px !important",
            },
            maxWidthLg: {
                maxWidth: "1448px !important",
            }
        },
    },
},
})