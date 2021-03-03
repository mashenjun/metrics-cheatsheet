import {Button, Menu, MenuItem} from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    languageName: {
        [theme.breakpoints.down('xs')]: {
            display: "none"
        },
    },
}));
export function LanguageButton() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const {i18n} = useTranslation();

    const handleClick = (event: any) => setAnchorEl(event.currentTarget);
    const closeMenu = () => {
        setAnchorEl(null);
    }
    const changeLanguage = (languageCode: string) => {
        if (languageCode !== null) {
            i18n.changeLanguage(languageCode).then(() => window.location.reload());
        }
        closeMenu();
    };
    const getLanguageName = (languageCode: string) => {
        switch (languageCode) {
            case "zh":
            case "zh-CN":
                return "中文"
            case "en":
                return "English"
            default:
                console.error(languageCode);
        }
    };

    return (
        <>
            <Button color="inherit" aria-controls="language-menu" aria-haspopup="true"
                    onClick={handleClick}>
                <TranslateIcon/>
                <span className={classes.languageName}>{getLanguageName(i18n.language)}</span>
                <ExpandMoreIcon/>
            </Button>
            <Menu
                id="language-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={closeMenu}
            >
                <MenuItem
                    key="zh"
                    onClick={() => changeLanguage("zh")}>
                    中文
                </MenuItem>
                <MenuItem
                    key="en"
                    onClick={() => changeLanguage("en")}>
                    English
                </MenuItem>
            </Menu>
        </>
    )
}