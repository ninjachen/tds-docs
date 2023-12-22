import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate from "@docusaurus/Translate";
import { BRAND } from "../../constants/env";
import styles from "./styles.module.scss";
import useBaseUrl from "@docusaurus/useBaseUrl";

const LOGOS = {
  tds: (
    <svg width="139" height="39" viewBox="0 0 139 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34.634 20.6583C34.634 22.58 33.7281 23.473 32.9646 23.8806C32.5505 24.1071 32.1234 24.1783 31.7352 24.1783C31.2693 24.1783 30.8681 24.0618 30.6481 23.9583C29.7552 23.5377 29.2634 22.7742 29.1146 21.5512C28.9981 20.6195 28.9075 18.2124 30.5381 16.0383C31.5087 14.7442 32.9452 13.8706 34.0387 13.9289C34.3687 13.9483 34.634 14.2265 34.634 14.55V20.6583ZM43.9646 27.323C43.5246 26.8895 43.324 26.0095 43.324 24.4695V11.6447C43.324 10.2277 42.2628 9.28299 40.0887 8.75887C38.6975 8.4224 37.0152 8.1571 35.1646 8.1571C32.5311 8.1571 29.5546 8.69417 26.5975 10.3183C23.6405 11.9424 21.4728 14.6924 20.6381 17.863C20.2887 19.1895 19.3958 23.8095 22.5923 27.4395C24.294 29.3677 26.8823 30.4936 29.5417 30.4483C32.3434 30.3965 34.7181 29.0118 35.7793 27.9571C36.7305 28.9406 38.0893 29.3548 39.8623 29.3548C41.687 29.3548 43.3046 28.7465 44.204 28.0283C44.3917 27.8795 44.3593 27.6012 44.1587 27.4718C44.0875 27.433 44.0228 27.3812 43.9646 27.323Z" fill="#00D9C5"/>
    <path d="M59.4292 21.8812C58.4586 23.1753 57.0221 24.0488 55.9286 23.9906C55.5986 23.9712 55.3333 23.693 55.3333 23.3694V17.2677C55.3333 15.3459 56.2392 14.453 57.0027 14.0453C57.4168 13.8253 57.8504 13.7477 58.2321 13.7477C58.698 13.7477 59.0992 13.8642 59.3192 13.9677C60.2121 14.3883 60.7039 15.1518 60.8527 16.3747C60.9692 17.3 61.0598 19.7071 59.4292 21.8812ZM60.4386 7.47769C57.6433 7.65239 55.2621 8.91415 54.201 9.96885C53.2498 8.98533 51.8974 8.57121 50.118 8.57121C48.2933 8.57121 46.6757 9.17944 45.7762 9.89768C45.5886 10.0465 45.6209 10.3247 45.8215 10.4541C45.8862 10.4994 45.951 10.5447 46.0092 10.603C46.4492 11.0365 46.6498 11.923 46.6498 13.4565V26.2812C46.6498 26.3006 46.6498 26.3265 46.6498 26.3459V36.77C46.6498 37.5724 47.3486 38.2 48.1445 38.1224L52.2792 37.7018C54.0133 37.5271 55.3333 36.0647 55.3333 34.3241V28.9794C57.4686 29.7106 61.2215 29.5036 64.1462 27.7759C66.6504 26.2941 68.6951 23.8159 69.5039 20.38C69.8209 19.0406 70.578 13.8253 67.3815 10.1953C65.6862 8.26062 63.208 7.30298 60.4386 7.47769Z" fill="#00D9C5"/>
    <path d="M25.1804 5.87948V2.19771C25.1804 1.39536 24.4881 0.767716 23.6857 0.845363L8.9522 2.32712C8.9522 2.32712 8.1822 2.3983 7.43161 2.45007C6.0922 2.54065 5.08926 2.573 4.3322 2.243C3.89867 2.05535 3.30985 1.6283 3.01867 0.968295C2.92161 0.748296 2.63043 0.703002 2.46867 0.877708C1.60808 1.78359 0.753962 3.14889 0.417492 4.4236C0.0551387 5.8083 -0.0483915 7.63948 1.08396 9.01124C1.90573 10.0077 3.33573 10.8618 6.42867 10.5512C7.15985 10.4801 7.93631 10.3959 8.37631 10.3506C8.5769 10.3312 8.74514 10.4865 8.74514 10.6871V29.193C8.74514 29.9954 9.43749 30.623 10.2398 30.5454L14.834 30.0795C16.5681 29.9048 17.8881 28.4424 17.8881 26.6954V9.69712C17.8881 9.52241 18.0175 9.38006 18.1922 9.36065L22.424 8.9336C23.9898 8.76536 25.1804 7.45183 25.1804 5.87948Z" fill="#00D9C5"/>
    <path d="M102.95 20.6583C102.95 22.58 102.044 23.473 101.281 23.8806C100.867 24.1071 100.44 24.1783 100.051 24.1783C99.5856 24.1783 99.1844 24.0618 98.9709 23.9583C98.0779 23.5377 97.5862 22.7742 97.4374 21.5512C97.3209 20.6195 97.2303 18.2124 98.8609 16.0383C99.8315 14.7442 101.268 13.8706 102.361 13.9289C102.691 13.9483 102.957 14.2265 102.957 14.55V20.6583H102.95ZM112.287 27.323C111.847 26.8895 111.647 26.0095 111.647 24.4695V11.6447C111.647 10.2277 110.586 9.28299 108.411 8.75887C107.02 8.4224 105.331 8.1571 103.487 8.1571C100.847 8.1571 97.8774 8.69417 94.9203 10.3183C91.9632 11.9424 89.7956 14.6924 88.9609 17.863C88.6115 19.1895 87.7185 23.8095 90.915 27.4395C92.6168 29.3677 95.205 30.4936 97.8579 30.4483C100.66 30.3965 103.034 29.0118 104.096 27.9571C105.047 28.9406 106.406 29.3548 108.179 29.3548C110.003 29.3548 111.621 28.7465 112.52 28.0283C112.708 27.8795 112.676 27.6012 112.475 27.4718C112.404 27.433 112.339 27.3812 112.287 27.323Z" fill="#00D9C5"/>
    <path d="M127.752 21.8812C126.781 23.1753 125.351 24.0488 124.251 23.9906C123.921 23.9712 123.656 23.693 123.656 23.3694V17.2677C123.656 15.3459 124.562 14.453 125.325 14.0453C125.74 13.8253 126.173 13.7477 126.555 13.7477C127.021 13.7477 127.422 13.8642 127.642 13.9677C128.535 14.3883 129.027 15.1518 129.175 16.3747C129.285 17.3 129.376 19.7071 127.752 21.8812ZM128.755 7.47769C125.96 7.65239 123.578 8.91415 122.517 9.96885C121.566 8.98533 120.214 8.57121 118.434 8.57121C116.61 8.57121 114.992 9.17944 114.099 9.89768C113.911 10.0465 113.944 10.3247 114.144 10.4541C114.209 10.4994 114.274 10.5447 114.332 10.603C114.772 11.0365 114.973 11.923 114.973 13.4565V26.2812C114.973 26.3006 114.973 26.3265 114.973 26.3459V36.77C114.973 37.5724 115.665 38.2 116.467 38.1224L120.608 37.7018C122.343 37.5271 123.663 36.0647 123.663 34.3241V28.9794C125.798 29.7106 129.551 29.5036 132.475 27.7759C134.98 26.2941 137.018 23.8159 137.833 20.38C138.15 19.0406 138.907 13.8253 135.711 10.1953C134.003 8.26062 131.524 7.30298 128.755 7.47769Z" fill="#00D9C5"/>
    <path d="M93.4968 5.87948V2.19771C93.4968 1.39536 92.8045 0.767716 92.0021 0.845363L77.2686 2.32712C77.2686 2.32712 76.4986 2.3983 75.748 2.45007C74.4086 2.54065 73.4057 2.573 72.6486 2.243C72.2151 2.05535 71.6262 1.6283 71.3351 0.968295C71.238 0.748296 70.9468 0.703002 70.7851 0.877708C69.9245 1.78359 69.0704 3.14889 68.7339 4.4236C68.3715 5.8083 68.268 7.63948 69.4004 9.01124C70.2221 10.0077 71.6521 10.8618 74.7451 10.5512C75.4763 10.4801 76.2527 10.3959 76.6927 10.3506C76.8933 10.3312 77.0615 10.4865 77.0615 10.6871V29.193C77.0615 29.9954 77.7604 30.623 78.5562 30.5454L83.1504 30.0795C84.8845 29.9048 86.2045 28.4424 86.2045 26.6954V9.69712C86.2045 9.52241 86.3339 9.38006 86.5086 9.36065L90.7404 8.9336C92.3062 8.76536 93.4968 7.45183 93.4968 5.87948Z" fill="#00D9C5"/>
    </svg>
    
  ),
  leancloud: (
    <svg
      width="929"
      height="147"
      viewBox="0 0 929 147"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.917 4.72504H0V143.64H88.074V118.314H28.917V4.72504ZM142.695 45.927C114.156 45.927 94.5 67.284 94.5 96.012C94.5 124.74 113.778 145.53 143.829 145.53C161.784 145.53 174.447 139.86 184.464 128.331L165.375 112.833C161.217 118.503 153.846 122.661 144.396 122.661C130.599 122.661 123.039 115.668 122.472 103.383H187.299V94.5C187.299 68.229 172.746 45.927 142.695 45.927ZM141.75 66.906C153.09 66.906 159.516 75.033 159.894 85.806H122.472C123.039 74.844 130.41 66.906 141.75 66.906ZM240.975 45.927C215.46 45.927 198.261 67.095 198.261 95.823C198.261 124.551 215.46 145.53 240.975 145.53C254.772 145.53 264.033 139.86 268.947 133.056L270.459 143.64H295.407V47.817H270.459L268.947 58.59C264.033 51.597 254.772 45.927 240.975 45.927ZM247.779 70.119C257.418 70.119 263.277 75.411 267.435 82.215V109.431C263.277 116.235 257.418 121.338 247.779 121.338C235.116 121.338 226.233 111.51 226.233 95.823C226.233 79.947 235.116 70.119 247.779 70.119ZM374.22 45.927C360.99 45.927 351.729 51.408 347.004 58.401L345.681 47.817H320.733V143.64H348.516V83.349C352.107 77.49 357.966 72.009 366.66 72.009C376.488 72.009 382.347 79.38 382.347 89.964V143.64H410.13V88.452C410.13 62.559 397.467 45.927 374.22 45.927ZM497.637 2.26801C455.868 2.26801 426.384 33.075 426.384 74.088C426.384 115.29 455.868 146.097 497.637 146.097C517.86 146.097 534.303 140.049 548.1 124.929L530.145 103.95C522.774 112.833 512.001 119.826 497.637 119.826C472.122 119.826 455.49 100.548 455.49 74.088C455.49 47.628 472.122 28.539 497.637 28.539C511.812 28.539 522.396 35.343 529.767 44.037L547.911 23.058C534.492 9.26104 519.561 2.26801 497.637 2.26801ZM590.058 0H562.275V143.64H590.058V0ZM658.287 45.927C629.181 45.927 608.013 67.284 608.013 96.012C608.013 124.74 629.181 145.53 658.287 145.53C687.393 145.53 708.939 124.74 708.939 96.012C708.939 67.284 687.393 45.927 658.287 45.927ZM658.287 70.119C671.328 70.119 680.778 81.27 680.778 96.012C680.778 110.565 671.328 121.338 658.287 121.338C645.435 121.338 635.985 110.565 635.985 96.012C635.985 81.27 645.435 70.119 658.287 70.119ZM813.267 47.817H785.484V108.108C781.704 113.967 776.223 119.448 767.151 119.448C757.701 119.448 752.409 112.266 752.409 101.871V47.817H724.626V103.383C724.626 129.087 736.533 145.53 759.213 145.53C773.01 145.53 781.893 140.238 786.996 133.245L788.319 143.64H813.267V47.817ZM928.179 0H900.207V56.511C895.671 51.219 887.355 45.927 873.747 45.927C848.232 45.927 831.033 67.095 831.033 95.823C831.033 124.551 848.232 145.53 873.747 145.53C887.544 145.53 896.805 139.86 901.719 133.056L903.231 143.64H928.179V0ZM880.551 70.119C890.19 70.119 896.049 75.411 900.207 82.215V109.431C896.049 116.235 890.19 121.338 880.551 121.338C867.888 121.338 859.005 111.51 859.005 95.823C859.005 79.947 867.888 70.119 880.551 70.119Z"
        fill="#2C97E8"
      />
    </svg>
  ),
};

interface LogoProps {
  noLabel?: boolean;
  noLink?: boolean;
  reversed?: boolean;
  size?: number;
}

const Logo = ({ noLabel, noLink, reversed, size = 1 }: LogoProps) => {
  const { siteConfig } = useDocusaurusContext();
  const mainDomainHost = (siteConfig.customFields?.mainDomainHost ??
    "") as string;
  const dcDomainHost = (siteConfig.customFields?.dcDomainHost ?? "") as string;

  const getHeight = (base: number): number => base * size;

  const LinkWrapper = ({ children }) =>
    noLink ? children : <a href={mainDomainHost}>{children}</a>;


    const {
      i18n: { currentLocale },
    } = useDocusaurusContext();
  return (
    <div className={styles.logo}>
      <LinkWrapper>
      {
        BRAND === "leancloud" ?  <div
        title={BRAND === "leancloud" ? "LeanCloud" : "TapTap"}
        className={`${styles.logoImage} ${reversed ? styles.reversed : ""}`}
        style={{
          height: getHeight(BRAND === "leancloud" ? 20 : 24),
          transform: BRAND === "leancloud" ? "none" : "translateY(1px)",
        }}
      >
        {BRAND === "leancloud" ? LOGOS.leancloud : LOGOS.tds}
      </div> :  
       (currentLocale === "en")?  <div className={styles.logodev} >
       <img src={useBaseUrl("/img/logo_top_en.png")} width="203" height="28" ></img>
      </div>:
        <div className={styles.logodev}>
            <img src={useBaseUrl("/img/logo_top_cn.png")} width="203" height="28" ></img>

      </div>
      }


      
      </LinkWrapper>

      {BRAND === "tds" && !noLabel && (
        <a className={styles.label} href={dcDomainHost}>
          {/* <Translate id="tds-header-开发者中心" description="from Header">
            开发者服务
          </Translate> */}
        </a>
      )}
    </div>
  );
};

export default Logo;
