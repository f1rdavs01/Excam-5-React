import React from "react";
import { Colors } from "../../../config/colors";
import { Box, Stack, InputAdornment, Typography, TextField } from "@mui/material";
import styled from "@emotion/styled";
import { Search } from "../../../assets/icon/search";
import { Korzina } from "../../../assets/icon/korzina";

const Searchheader = styled(TextField)`
  width: 376px;
  border-radius: "36px";
  height: 66px;
`;

export const HeaderSearch = () => {
  return (
    <>
      <Stack direction={"row"} gap={"18px"}>
        <Searchheader
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "36px",
              padding: "",
              backgroundColor: `${Colors.darkWhite}`,
            },
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  < Search/>
                </InputAdornment>
              ),
            },
          }}
        />
        <Stack
          sx={{ cursor: "pointer" }}
          padding={""}
          border={"1px solid #BFBFBF"}
          borderRadius={"33px"}
          direction={"row"}
          alignItems={"center"}
          width={"165px"}
          gap={"12px"}
        >
            
          <Korzina />
        
          <Typography fontWeight={"600"} fontSize={"body2"} variant="body2" >
            Cart (0)
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};