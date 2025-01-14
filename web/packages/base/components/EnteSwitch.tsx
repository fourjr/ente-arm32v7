import { Switch, styled, type SwitchProps } from "@mui/material";
import React from "react";

/**
 * A custom variant of the MUI {@link Switch}, styled per our requirements.
 */
export const EnteSwitch: React.FC<SwitchProps> = styled((props) => (
    <Switch
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        {...props}
    />
))(({ theme }) => ({
    width: 40,
    height: 24,
    padding: 0,
    "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 2,
        transitionDuration: "300ms",
        "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                backgroundColor: "#65C466",
                opacity: 1,
                border: 0,
                ...theme.applyStyles("dark", {
                    backgroundColor: "#2ECA45",
                }),
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
            },
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: "#33cf4d",
            border: "6px solid #fff",
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
            color: theme.palette.grey[600],
            ...theme.applyStyles("light", {
                color: theme.palette.grey[100],
            }),
        },
        "&.Mui-disabled + .MuiSwitch-track": {
            opacity: 0.3,
            ...theme.applyStyles("light", {
                opacity: 0.7,
            }),
        },
    },
    "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 20,
        height: 20,
    },
    "& .MuiSwitch-track": {
        borderRadius: 22 / 2,
        backgroundColor: theme.colors.fill.muted,
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
            duration: 500,
        }),
        ...theme.applyStyles("light", {
            backgroundColor: "#E9E9EA",
        }),
    },
}));
