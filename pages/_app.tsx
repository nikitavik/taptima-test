import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import MainLayout from "../presentation/components/layout/MainLayout"


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  #__next{
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
`

const theme = {
    colors: {
        primaryBlue: "#1665D8",
        darkenBlue: "#3F51B5",
        lightBlue: "#CDD1EA",
        lightGray23: "rgba(3, 3, 3, 0.23)",
        accentGreen: "#26A69A",
        backgroundGray: "#F9FAFB",
    },
    sizes: {
        headerHeight: "64px",
        sidebarWidth: "270px"
    },
    shadows: {
        mainShadow: "0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15);",
        lightShadow: "0px 1px 3px rgba(63, 63, 68, 0.15);"
    },
    borders: {
        light1pxBorder: "1px solid rgba(63, 63, 68, 0.005);"
    }
}


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ThemeProvider>
    </>
  )
}
export default MyApp
