import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-react-intl";
import * as styles from "../styles/language-switch.module.scss"

const languageName = {
    ja: "日本語",
    en: "English"
}

const LanguageSwitch = (props) => {
    return (
        <div className={styles.languageSwitch + " " + (props.class && props.class)}>
            <IntlContextConsumer>
                {({ languages, language: currentLocale }) =>
                  languages.map(language => (
                    <a
                      key={language}
                      onClick={() => changeLocale(language)}
                      className={styles.lang}
                      style={{
                        color: currentLocale === language ? `var(--color-background)` : `var(--color-text)`,
                        background: currentLocale === language ? `var(--color-text)` : `var(--color-background)`,
                      }}
                      >
                        {languageName[language]}
                    </a>
                  ))
                }
            </IntlContextConsumer>
        </div>
    )
}

export default LanguageSwitch