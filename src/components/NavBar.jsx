import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import logo from '/static/assets/Media/Logo-Text-Light-Transparent.png'


/* const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setisOpen] = React.useState(false);
    function handleClick() {
        setisOpen(!isOpen);
    }


    useEffect(() => {
      const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]); */

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return (
        <header className="bg-teal-200 dark:bg-[#181825] m-auto lg:m-10 xl:m-10 mt-4 lg:mt-4 xl:mt-4 rounded-xl poppins-regular xl:fixed lg:fixed z-10 w-[94vw] block justify-self-center content-center">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                <div className="flex-1 md:flex md:items-center md:gap-12">
                    <a className="block text-black" href="/">
                    <span className="sr-only">Home</span>
                    <svg width="140" height="26" viewBox="0 0 140 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.2732 3.84504C27.9056 2.19528 29.4944 1.10547 31.267 1.10547H41.924C44.9169 1.10547 46.9835 4.09018 45.9204 6.87737L39.0337 24.9341C38.8656 25.375 38.4414 25.6664 37.968 25.6664H25.117C22.1211 25.6664 20.0543 22.676 21.1232 19.8878L27.2732 3.84504Z" fill="url(#paint0_linear_691_9)"/>
                        <path d="M27.2732 3.84504C27.9056 2.19528 29.4944 1.10547 31.267 1.10547H41.924C44.9169 1.10547 46.9835 4.09018 45.9204 6.87737L39.0337 24.9341C38.8656 25.375 38.4414 25.6664 37.968 25.6664H25.117C22.1211 25.6664 20.0543 22.676 21.1232 19.8878L27.2732 3.84504Z" fill="url(#paint1_linear_691_9)" fill-opacity="0.5"/>
                        <path d="M27.2732 3.84504C27.9056 2.19528 29.4944 1.10547 31.267 1.10547H41.924C44.9169 1.10547 46.9835 4.09018 45.9204 6.87737L39.0337 24.9341C38.8656 25.375 38.4414 25.6664 37.968 25.6664H25.117C22.1211 25.6664 20.0543 22.676 21.1232 19.8878L27.2732 3.84504Z" fill="url(#paint2_linear_691_9)" fill-opacity="0.2"/>
                        <path d="M38.1463 25.6664H28.5271H27.1733L29.0259 24.1048L28.5271 25.6664L32.6852 12.7787C32.9749 11.8808 34.2585 11.9052 34.5137 12.8134L37.8658 24.7436L37.8701 24.7579C37.908 24.8779 38.1972 25.7019 38.8589 25.2405C38.7164 25.5245 38.1463 25.6664 38.1463 25.6664Z" fill="url(#paint3_linear_691_9)"/>
                        <path d="M38.1463 25.6664H28.5271H27.1733L29.0259 24.1048L28.5271 25.6664L32.6852 12.7787C32.9749 11.8808 34.2585 11.9052 34.5137 12.8134L37.8658 24.7436L37.8701 24.7579C37.908 24.8779 38.1972 25.7019 38.8589 25.2405C38.7164 25.5245 38.1463 25.6664 38.1463 25.6664Z" fill="url(#paint4_linear_691_9)" fill-opacity="0.5"/>
                        <path d="M21.9252 12.1082H33.6574L33.553 12.1706C33.3917 12.267 33.2755 12.4233 33.2298 12.6051L28.778 24.9311C28.426 25.9058 27.0445 25.9117 26.6841 24.94L21.9252 12.1082Z" fill="url(#paint5_linear_691_9)"/>
                        <path d="M21.9252 12.1082H33.6574L33.553 12.1706C33.3917 12.267 33.2755 12.4233 33.2298 12.6051L28.778 24.9311C28.426 25.9058 27.0445 25.9117 26.6841 24.94L21.9252 12.1082Z" fill="url(#paint6_linear_691_9)" fill-opacity="0.5"/>
                        <path d="M21.9252 12.1082H33.6574L33.553 12.1706C33.3917 12.267 33.2755 12.4233 33.2298 12.6051L28.778 24.9311C28.426 25.9058 27.0445 25.9117 26.6841 24.94L21.9252 12.1082Z" fill="url(#paint7_linear_691_9)" fill-opacity="0.2"/>
                        <path d="M0.311276 6.94956C-0.814804 4.15143 1.25342 1.10547 4.27944 1.10547H14.9671C16.714 1.10547 18.2851 2.16425 18.9352 3.77954L27.4583 24.9566L27.6576 25.4535L27.7433 25.6664H10.7357C8.98878 25.6664 7.4176 24.6076 6.76752 22.9923L0.311276 6.94956Z" fill="url(#paint8_linear_691_9)"/>
                        <path d="M0.311276 6.94956C-0.814804 4.15143 1.25342 1.10547 4.27944 1.10547H14.9671C16.714 1.10547 18.2851 2.16425 18.9352 3.77954L27.4583 24.9566L27.6576 25.4535L27.7433 25.6664H10.7357C8.98878 25.6664 7.4176 24.6076 6.76752 22.9923L0.311276 6.94956Z" fill="url(#paint9_linear_691_9)" fill-opacity="0.2"/>
                        <path d="M27.6576 25.4535L27.7433 25.6664C27.7433 25.6664 28.1708 25.6664 28.3846 25.4535C27.8146 25.8084 27.4798 24.9715 27.4583 24.9566L27.6576 25.4535Z" fill="url(#paint10_linear_691_9)"/>
                        <path className="dark:fill-[#D4C0FF]" d="M59.3472 13.4653C59.0912 13.4653 58.8837 13.2579 58.8837 13.0019V5.79692C58.8837 5.54099 58.6763 5.33351 58.4203 5.33351H56.2472C55.9913 5.33351 55.7838 5.12603 55.7838 4.87009V3.57915C55.7838 3.32322 55.9913 3.11574 56.2472 3.11574H64.1284C64.3843 3.11574 64.5918 3.32322 64.5918 3.57915V4.87009C64.5918 5.12603 64.3843 5.33351 64.1284 5.33351H61.8807C61.6248 5.33351 61.4173 5.54099 61.4173 5.79692V13.0019C61.4173 13.2579 61.2099 13.4653 60.9539 13.4653H59.3472Z" fill="#0A0020"/>
                        <path className="dark:fill-[#D4C0FF]" d="M69.4053 13.4273C68.5646 13.6538 67.7889 13.6825 67.0783 13.5137C66.3652 13.3353 65.7586 12.9995 65.2585 12.5064C64.7558 12.0037 64.4034 11.3731 64.2011 10.6146C64.045 10.0288 63.9972 9.46541 64.0577 8.92426C64.1182 8.38311 64.2731 7.88859 64.5223 7.4407C64.7689 6.9832 65.1007 6.5954 65.5177 6.2773C65.9416 5.94702 66.4354 5.70598 66.9991 5.55419C67.5341 5.41011 68.047 5.37491 68.5376 5.4486C69.0379 5.51972 69.4965 5.68437 69.9135 5.94256C70.3305 6.20075 70.6876 6.54194 70.9851 6.96612C71.2825 7.3903 71.4958 7.88342 71.6252 8.44547L71.6695 8.62852C71.7287 8.87323 71.5819 9.12093 71.3388 9.1864L65.7141 10.7011L65.0389 9.49361L69.5674 8.2741L69.5242 8.36003C69.48 8.44793 69.3507 8.43423 69.3262 8.33906C69.2431 8.10416 69.1041 7.89974 68.9217 7.75333C68.7463 7.59474 68.5394 7.49093 68.3011 7.44191C68.0627 7.39289 67.8098 7.4044 67.5423 7.47644C67.1697 7.57678 66.8701 7.73979 66.6436 7.96546C66.424 8.17895 66.2858 8.44773 66.2288 8.77181C66.1693 9.08628 66.1946 9.44996 66.3047 9.86284C66.4173 10.2853 66.6018 10.6318 66.8583 10.9024C67.1217 11.1608 67.4437 11.3313 67.8242 11.4141C68.2142 11.4943 68.6432 11.4714 69.1114 11.3453C69.4362 11.2579 69.71 11.1327 69.9328 10.9698C70.0616 10.8781 70.1907 10.7641 70.3202 10.628C70.5027 10.4361 70.8031 10.3979 71.0059 10.5672L71.7955 11.2264C71.9773 11.3783 72.0171 11.6451 71.8681 11.83C71.7052 12.0323 71.5286 12.2163 71.3384 12.3819C71.0476 12.6352 70.7356 12.8479 70.4026 13.0199C70.0817 13.1989 69.7493 13.3347 69.4053 13.4273Z" fill="#0A0020"/>
                        <path className="dark:fill-[#D4C0FF]" d="M76.7568 13.6811C75.9952 13.6811 75.3127 13.5022 74.7094 13.1443C74.1061 12.7865 73.6264 12.2994 73.2703 11.6831C72.9241 11.0568 72.751 10.351 72.751 9.56571C72.751 8.78041 72.9241 8.07959 73.2703 7.46328C73.6264 6.83702 74.1061 6.34496 74.7094 5.9871C75.3127 5.62924 75.9952 5.45031 76.7568 5.45031C77.4591 5.45031 78.102 5.57457 78.6855 5.82308C79.1491 6.01719 79.5372 6.27195 79.8498 6.58735C80.0028 6.74168 79.996 6.98572 79.857 7.15275L79.1525 7.99919C78.9698 8.21858 78.6334 8.22101 78.4099 8.04337C78.3789 8.0187 78.3471 7.99432 78.3146 7.97025C78.1267 7.83108 77.919 7.72173 77.6915 7.64221C77.464 7.56268 77.2266 7.52292 76.9794 7.52292C76.6035 7.52292 76.2722 7.61239 75.9853 7.79132C75.6985 7.96031 75.4759 8.19888 75.3177 8.50704C75.1594 8.8152 75.0803 9.16809 75.0803 9.56571C75.0803 9.94345 75.1594 10.2864 75.3177 10.5946C75.4858 10.9027 75.7133 11.1463 76.0002 11.3252C76.287 11.5041 76.6134 11.5936 76.9794 11.5936C77.2365 11.5936 77.4739 11.5638 77.6915 11.5041C77.9091 11.4345 78.1069 11.3351 78.2849 11.2059C78.325 11.1784 78.3644 11.1495 78.4031 11.1192C78.6323 10.94 78.9747 10.9379 79.1585 11.1635L79.8457 12.0067C79.9827 12.1749 79.9873 12.4185 79.8321 12.5701C79.5251 12.8698 79.1379 13.1159 78.6707 13.3083C78.0772 13.5569 77.4393 13.6811 76.7568 13.6811Z" fill="#0A0020"/>
                        <path className="dark:fill-[#D4C0FF]" d="M81.848 13.5319C81.592 13.5319 81.3846 13.3244 81.3846 13.0685V2.96127C81.3846 2.70533 81.592 2.49785 81.848 2.49785H83.2504C83.5064 2.49785 83.7139 2.70533 83.7139 2.96127V7.2246L83.2391 7.40353C83.3479 7.04567 83.5408 6.7226 83.8177 6.43433C84.1046 6.13611 84.4458 5.89753 84.8414 5.7186C85.2371 5.53967 85.6525 5.45021 86.0877 5.45021C86.6811 5.45021 87.1806 5.57446 87.5861 5.82298C87.9917 6.06155 88.2983 6.42438 88.506 6.91147C88.7137 7.38862 88.8175 7.97512 88.8175 8.67096V13.0685C88.8175 13.3244 88.6101 13.5319 88.3541 13.5319H86.8923C86.6364 13.5319 86.4289 13.3244 86.4289 13.0685V8.8648C86.4289 8.5467 86.3844 8.28327 86.2954 8.07452C86.2064 7.86577 86.0679 7.71169 85.88 7.61228C85.7019 7.50294 85.4794 7.45323 85.2123 7.46318C85.0046 7.46318 84.8118 7.49797 84.6337 7.56755C84.4557 7.6272 84.3024 7.72163 84.1738 7.85086C84.0452 7.97015 83.9414 8.10931 83.8622 8.26836C83.793 8.42741 83.7584 8.60137 83.7584 8.79024V13.0685C83.7584 13.3244 83.5509 13.5319 83.295 13.5319H82.5863C82.3094 13.5319 82.072 13.5319 81.8742 13.5319C81.8654 13.5319 81.8566 13.5319 81.848 13.5319Z" fill="#0A0020"/>
                        <path className="dark:fill-[#D4C0FF]" d="M91.5178 13.5316C91.2618 13.5316 91.0543 13.3242 91.0543 13.0682V3.55743C91.0543 3.3015 91.2618 3.09402 91.5178 3.09402H93.1131C93.369 3.09402 93.5765 3.30149 93.5765 3.55743V13.0682C93.5765 13.3242 93.369 13.5316 93.1131 13.5316H91.5178ZM92.2264 9.53552V7.41817H97.1337C97.3897 7.41817 97.5971 7.62565 97.5971 7.88159V9.0721C97.5971 9.32804 97.3897 9.53552 97.1337 9.53552H92.2264ZM92.2264 5.33065V3.55743C92.2264 3.3015 92.4339 3.09402 92.6898 3.09402H97.742C97.998 3.09402 98.2054 3.30149 98.2054 3.55743V4.86723C98.2054 5.12317 97.998 5.33065 97.742 5.33065H92.2264Z" fill="#0A0020"/>
                        <path className="dark:fill-[#D4C0FF]" d="M100.452 13.5319C100.196 13.5319 99.9882 13.3244 99.9882 13.0685V2.96127C99.9882 2.70533 100.196 2.49785 100.452 2.49785H101.899C102.155 2.49785 102.362 2.70533 102.362 2.96127V13.0685C102.362 13.3244 102.155 13.5319 101.899 13.5319H100.452Z" fill="#0A0020"/>
                        <path className="dark:fill-[#D4C0FF]" d="M108.044 13.6811C107.223 13.6811 106.491 13.5022 105.848 13.1443C105.215 12.7865 104.71 12.2994 104.334 11.6831C103.968 11.0667 103.786 10.361 103.786 9.56571C103.786 8.77047 103.968 8.06468 104.334 7.44837C104.71 6.83205 105.215 6.34496 105.848 5.9871C106.491 5.62924 107.223 5.45031 108.044 5.45031C108.864 5.45031 109.591 5.62924 110.224 5.9871C110.867 6.34496 111.372 6.83205 111.738 7.44837C112.104 8.06468 112.287 8.77047 112.287 9.56571C112.287 10.361 112.104 11.0667 111.738 11.6831C111.372 12.2994 110.867 12.7865 110.224 13.1443C109.591 13.5022 108.864 13.6811 108.044 13.6811ZM108.044 11.6234C108.4 11.6234 108.716 11.5339 108.993 11.355C109.27 11.1761 109.488 10.9325 109.646 10.6244C109.804 10.3162 109.878 9.96334 109.868 9.56571C109.878 9.16809 109.804 8.8152 109.646 8.50704C109.488 8.18894 109.27 7.94043 108.993 7.7615C108.716 7.58257 108.4 7.4931 108.044 7.4931C107.687 7.4931 107.366 7.58257 107.079 7.7615C106.802 7.94043 106.585 8.18894 106.426 8.50704C106.268 8.8152 106.194 9.16809 106.204 9.56571C106.194 9.96334 106.268 10.3162 106.426 10.6244C106.585 10.9325 106.802 11.1761 107.079 11.355C107.366 11.5339 107.687 11.6234 108.044 11.6234Z" fill="#0A0020"/>
                        <path className="dark:fill-[#D4C0FF]" fill-rule="evenodd" clip-rule="evenodd" d="M114.12 6.9914C113.805 6.9914 113.582 7.29955 113.68 7.59921L115.521 13.2128C115.583 13.4031 115.761 13.5318 115.961 13.5318H117.303C117.492 13.5318 117.662 13.4172 117.733 13.2421L119.46 8.96921L121.175 13.2411C121.246 13.4167 121.416 13.5318 121.605 13.5318H122.95C123.149 13.5318 123.325 13.4053 123.389 13.2173L126.127 5.14358C126.229 4.84307 126.006 4.53133 125.688 4.53133H123.835C123.628 4.53133 123.445 4.66895 123.389 4.86836L121.992 9.79734L120.384 6.04937C120.311 5.87908 120.143 5.76868 119.958 5.76868H118.989C118.801 5.76868 118.631 5.88259 118.56 6.05689L117.021 9.82652L116.315 7.32877C116.258 7.12919 116.076 6.9914 115.869 6.9914H114.12ZM113.228 6.22059C113.311 6.47436 113.548 6.64595 113.815 6.64595H115.305C115.715 6.64595 116.011 6.25434 115.9 5.86001L115.619 4.8687C115.563 4.66912 115.381 4.53133 115.173 4.53133H113.313C112.998 4.53133 112.775 4.83948 112.873 5.13914L113.228 6.22059Z" fill="#0A0020"/>
                        <path className="dark:fill-[#D4C0FF]" d="M126.864 13.5318C126.664 13.5318 126.486 13.4031 126.424 13.2128L123.776 5.13913C123.678 4.83948 123.901 4.53132 124.217 4.53132H126.077C126.284 4.53132 126.466 4.66912 126.523 4.8687L128.08 10.3791L127.726 10.3113L129.463 6.05689C129.534 5.88259 129.704 5.76868 129.892 5.76868H130.861C131.046 5.76868 131.214 5.87907 131.287 6.04937L133.123 10.3283L132.735 10.3622L136.202 1.99523C136.273 1.82209 136.442 1.7092 136.63 1.7092H138.472C138.804 1.7092 139.028 2.04719 138.899 2.35267L134.305 13.2485C134.232 13.4202 134.064 13.5318 133.878 13.5318H132.508C132.319 13.5318 132.149 13.4167 132.078 13.2411L130.256 8.70105L130.458 8.73495L128.636 13.2421C128.565 13.4172 128.395 13.5318 128.206 13.5318H126.864Z" fill="#0A0020"/>
                        <path className="dark:fill-[#D4C0FF]" d="M138.252 0.775301L135.589 1.59033C135.31 1.67583 135.294 2.06531 135.566 2.17291L139.261 3.63713C139.519 3.73947 139.771 3.47548 139.656 3.22244L138.624 0.943182C138.56 0.80171 138.401 0.729834 138.252 0.775301Z" fill="#0A0020"/>
                        <path className="dark:fill-[#D4C0FF]" d="M119.46 8.96921L117.733 13.2421C117.662 13.4172 117.492 13.5318 117.303 13.5318H115.961C115.761 13.5318 115.583 13.4031 115.521 13.2128L113.68 7.59921C113.582 7.29955 113.805 6.9914 114.12 6.9914H115.869C116.076 6.9914 116.258 7.12919 116.315 7.32877L117.021 9.82652M119.46 8.96921L121.175 13.2411C121.246 13.4167 121.416 13.5318 121.605 13.5318H122.95C123.149 13.5318 123.325 13.4053 123.389 13.2173L126.127 5.14358C126.229 4.84307 126.006 4.53133 125.688 4.53133H123.835C123.628 4.53133 123.445 4.66895 123.389 4.86836L121.992 9.79734M119.46 8.96921L119.555 8.73495L119.352 8.70105L119.46 8.96921ZM121.992 9.79734L120.384 6.04937C120.311 5.87908 120.143 5.76868 119.958 5.76868H118.989C118.801 5.76868 118.631 5.88259 118.56 6.05689L117.021 9.82652M121.992 9.79734L121.832 10.3622L122.22 10.3283L121.992 9.79734ZM117.021 9.82652L117.177 10.3791L116.823 10.3113L117.021 9.82652ZM61.4173 13.0019V5.79692C61.4173 5.54099 61.6248 5.33351 61.8807 5.33351H64.1284C64.3843 5.33351 64.5918 5.12603 64.5918 4.87009V3.57915C64.5918 3.32322 64.3843 3.11574 64.1284 3.11574H56.2472C55.9913 3.11574 55.7838 3.32322 55.7838 3.57915V4.87009C55.7838 5.12603 55.9913 5.33351 56.2472 5.33351H58.4203C58.6763 5.33351 58.8837 5.54099 58.8837 5.79692V13.0019C58.8837 13.2579 59.0912 13.4653 59.3472 13.4653H60.9539C61.2099 13.4653 61.4173 13.2579 61.4173 13.0019ZM69.4053 13.4273C68.5646 13.6538 67.7889 13.6825 67.0783 13.5137C66.3652 13.3353 65.7586 12.9995 65.2585 12.5064C64.7558 12.0037 64.4034 11.3731 64.2011 10.6146C64.045 10.0288 63.9972 9.46541 64.0577 8.92426C64.1182 8.38311 64.2731 7.88859 64.5223 7.4407C64.7689 6.9832 65.1007 6.5954 65.5177 6.2773C65.9416 5.94702 66.4354 5.70598 66.9991 5.55419C67.5341 5.41011 68.047 5.37491 68.5376 5.4486C69.0379 5.51972 69.4965 5.68437 69.9135 5.94256C70.3305 6.20075 70.6876 6.54194 70.9851 6.96612C71.2825 7.3903 71.4958 7.88342 71.6252 8.44547L71.6695 8.62852C71.7287 8.87323 71.5819 9.12093 71.3388 9.1864L65.7141 10.7011L65.0389 9.49361L69.5674 8.2741L69.5242 8.36003C69.48 8.44793 69.3507 8.43423 69.3262 8.33906C69.2431 8.10416 69.1041 7.89974 68.9217 7.75333C68.7463 7.59474 68.5394 7.49093 68.3011 7.44191C68.0627 7.39289 67.8098 7.4044 67.5423 7.47644C67.1697 7.57678 66.8701 7.73979 66.6436 7.96546C66.424 8.17895 66.2858 8.44773 66.2288 8.77181C66.1693 9.08628 66.1946 9.44996 66.3047 9.86284C66.4173 10.2853 66.6018 10.6318 66.8583 10.9024C67.1217 11.1608 67.4437 11.3313 67.8242 11.4141C68.2142 11.4943 68.6432 11.4714 69.1114 11.3453C69.4362 11.2579 69.71 11.1327 69.9328 10.9698C70.0616 10.8781 70.1907 10.7641 70.3202 10.628C70.5027 10.4361 70.8031 10.3979 71.0059 10.5672L71.7955 11.2264C71.9773 11.3783 72.0171 11.6451 71.8681 11.83C71.7052 12.0323 71.5286 12.2163 71.3384 12.3819C71.0476 12.6352 70.7356 12.8479 70.4026 13.0199C70.0817 13.1989 69.7493 13.3347 69.4053 13.4273ZM76.7568 13.6811C75.9952 13.6811 75.3127 13.5022 74.7094 13.1443C74.1061 12.7865 73.6264 12.2994 73.2703 11.6831C72.9241 11.0568 72.751 10.351 72.751 9.56571C72.751 8.78041 72.9241 8.07959 73.2703 7.46328C73.6264 6.83702 74.1061 6.34496 74.7094 5.9871C75.3127 5.62924 75.9952 5.45031 76.7568 5.45031C77.4591 5.45031 78.102 5.57457 78.6855 5.82308C79.1491 6.01719 79.5372 6.27195 79.8498 6.58735C80.0028 6.74168 79.996 6.98572 79.857 7.15275L79.1525 7.99919C78.9698 8.21858 78.6334 8.22101 78.4099 8.04337C78.3789 8.0187 78.3471 7.99432 78.3146 7.97025C78.1267 7.83108 77.919 7.72173 77.6915 7.64221C77.464 7.56268 77.2266 7.52292 76.9794 7.52292C76.6035 7.52292 76.2722 7.61239 75.9853 7.79132C75.6985 7.96031 75.4759 8.19888 75.3177 8.50704C75.1594 8.8152 75.0803 9.16809 75.0803 9.56571C75.0803 9.94345 75.1594 10.2864 75.3177 10.5946C75.4858 10.9027 75.7133 11.1463 76.0002 11.3252C76.287 11.5041 76.6134 11.5936 76.9794 11.5936C77.2365 11.5936 77.4739 11.5638 77.6915 11.5041C77.9091 11.4345 78.1069 11.3351 78.2849 11.2059C78.325 11.1784 78.3644 11.1495 78.4031 11.1192C78.6323 10.94 78.9747 10.9379 79.1585 11.1635L79.8457 12.0067C79.9827 12.1749 79.9873 12.4185 79.8321 12.5701C79.5251 12.8698 79.1379 13.1159 78.6707 13.3083C78.0772 13.5569 77.4393 13.6811 76.7568 13.6811ZM83.7139 7.2246V2.96127C83.7139 2.70533 83.5064 2.49785 83.2504 2.49785H81.848C81.592 2.49785 81.3846 2.70533 81.3846 2.96127V13.0685C81.3846 13.3244 81.592 13.5319 81.848 13.5319C81.8566 13.5319 81.8654 13.5319 81.8742 13.5319C82.072 13.5319 82.3094 13.5319 82.5863 13.5319H83.295C83.5509 13.5319 83.7584 13.3244 83.7584 13.0685V8.79024C83.7584 8.60137 83.793 8.42741 83.8622 8.26836C83.9414 8.10931 84.0452 7.97015 84.1738 7.85086C84.3024 7.72163 84.4557 7.6272 84.6337 7.56755C84.8118 7.49797 85.0046 7.46318 85.2123 7.46318C85.4794 7.45323 85.7019 7.50294 85.88 7.61228C86.0679 7.71169 86.2064 7.86577 86.2954 8.07452C86.3844 8.28327 86.4289 8.5467 86.4289 8.8648V13.0685C86.4289 13.3244 86.6364 13.5319 86.8923 13.5319H88.3541C88.6101 13.5319 88.8175 13.3244 88.8175 13.0685V8.67096C88.8175 7.97512 88.7137 7.38862 88.506 6.91147C88.2983 6.42438 87.9917 6.06155 87.5861 5.82298C87.1806 5.57446 86.6811 5.45021 86.0877 5.45021C85.6525 5.45021 85.2371 5.53967 84.8414 5.7186C84.4458 5.89753 84.1046 6.13611 83.8177 6.43433C83.5408 6.7226 83.3479 7.04567 83.2391 7.40353L83.7139 7.2246ZM92.2264 9.53552V7.41817H97.1337C97.3897 7.41817 97.5971 7.62565 97.5971 7.88159V9.0721C97.5971 9.32804 97.3897 9.53552 97.1337 9.53552H92.2264ZM92.2264 5.33065V3.55743C92.2264 3.3015 92.4339 3.09402 92.6898 3.09402H97.742C97.998 3.09402 98.2054 3.30149 98.2054 3.55743V4.86723C98.2054 5.12317 97.998 5.33065 97.742 5.33065H92.2264ZM93.5765 13.0682V3.55743C93.5765 3.30149 93.369 3.09402 93.1131 3.09402H91.5178C91.2618 3.09402 91.0543 3.3015 91.0543 3.55743V13.0682C91.0543 13.3242 91.2618 13.5316 91.5178 13.5316H93.1131C93.369 13.5316 93.5765 13.3242 93.5765 13.0682ZM102.362 13.0685V2.96127C102.362 2.70533 102.155 2.49785 101.899 2.49785H100.452C100.196 2.49785 99.9882 2.70533 99.9882 2.96127V13.0685C99.9882 13.3244 100.196 13.5319 100.452 13.5319H101.899C102.155 13.5319 102.362 13.3244 102.362 13.0685ZM108.044 13.6811C107.223 13.6811 106.491 13.5022 105.848 13.1443C105.215 12.7865 104.71 12.2994 104.334 11.6831C103.968 11.0667 103.786 10.361 103.786 9.56571C103.786 8.77047 103.968 8.06468 104.334 7.44837C104.71 6.83205 105.215 6.34496 105.848 5.9871C106.491 5.62924 107.223 5.45031 108.044 5.45031C108.864 5.45031 109.591 5.62924 110.224 5.9871C110.867 6.34496 111.372 6.83205 111.738 7.44837C112.104 8.06468 112.287 8.77047 112.287 9.56571C112.287 10.361 112.104 11.0667 111.738 11.6831C111.372 12.2994 110.867 12.7865 110.224 13.1443C109.591 13.5022 108.864 13.6811 108.044 13.6811ZM108.044 11.6234C108.4 11.6234 108.716 11.5339 108.993 11.355C109.27 11.1761 109.488 10.9325 109.646 10.6244C109.804 10.3162 109.878 9.96334 109.868 9.56571C109.878 9.16809 109.804 8.8152 109.646 8.50704C109.488 8.18894 109.27 7.94043 108.993 7.7615C108.716 7.58257 108.4 7.4931 108.044 7.4931C107.687 7.4931 107.366 7.58257 107.079 7.7615C106.802 7.94043 106.585 8.18894 106.426 8.50704C106.268 8.8152 106.194 9.16809 106.204 9.56571C106.194 9.96334 106.268 10.3162 106.426 10.6244C106.585 10.9325 106.802 11.1761 107.079 11.355C107.366 11.5339 107.687 11.6234 108.044 11.6234ZM115.9 5.86001L115.619 4.8687C115.563 4.66912 115.381 4.53133 115.173 4.53133H113.313C112.998 4.53133 112.775 4.83948 112.873 5.13914L113.228 6.22059C113.311 6.47436 113.548 6.64595 113.815 6.64595H115.305C115.715 6.64595 116.011 6.25434 115.9 5.86001ZM128.08 10.3791L126.523 4.8687C126.466 4.66912 126.284 4.53132 126.077 4.53132H124.217C123.901 4.53132 123.678 4.83948 123.776 5.13913L126.424 13.2128C126.486 13.4031 126.664 13.5318 126.864 13.5318H128.206C128.395 13.5318 128.565 13.4172 128.636 13.2421L130.458 8.73495L130.256 8.70105L132.078 13.2411C132.149 13.4167 132.319 13.5318 132.508 13.5318H133.878C134.064 13.5318 134.232 13.4202 134.305 13.2485L138.899 2.35267C139.028 2.04719 138.804 1.7092 138.472 1.7092H136.63C136.442 1.7092 136.273 1.82209 136.202 1.99523L132.735 10.3622L133.123 10.3283L131.287 6.04937C131.214 5.87907 131.046 5.76868 130.861 5.76868H129.892C129.704 5.76868 129.534 5.88259 129.463 6.05689L127.726 10.3113L128.08 10.3791ZM135.589 1.59033L138.252 0.775301C138.401 0.729834 138.56 0.80171 138.624 0.943182L139.656 3.22244C139.771 3.47548 139.519 3.73947 139.261 3.63713L135.566 2.17291C135.294 2.06531 135.31 1.67583 135.589 1.59033Z" stroke="#0A0020" stroke-width="0.1"/>
                        <path className="dark:fill-[#D4C0FF]" d="M56.4232 20.6747H57.4335V25.6703H56.4232V20.6747Z" fill="#0A0020" fill-opacity="0.7"/>
                        <path className="dark:fill-[#D4C0FF]" d="M56.4232 20.6747H57.4335V25.6703H56.4232V20.6747Z" fill="black" fill-opacity="0.35"/>
                        <path className="dark:fill-[#D4C0FF]" d="M58.1756 20.6747H62.5595V21.6201H60.8726V25.6703H59.8624V21.6201H58.1756V20.6747Z" fill="#0A0020" fill-opacity="0.7"/>
                        <path className="dark:fill-[#D4C0FF]" d="M58.1756 20.6747H62.5595V21.6201H60.8726V25.6703H59.8624V21.6201H58.1756V20.6747Z" fill="black" fill-opacity="0.35"/>
                        <path className="dark:fill-[#D4C0FF]" d="M66.6678 20.582C67.6317 20.582 68.2434 21.1196 68.2897 22.0557H67.2888C67.2888 21.6479 67.0385 21.4162 66.64 21.4162C66.2693 21.4162 66.0468 21.6293 66.0468 21.9723C66.0468 22.343 66.26 22.4728 66.9551 22.7045C68.0395 23.0752 68.438 23.4923 68.438 24.243C68.438 25.1976 67.7244 25.763 66.7234 25.763C65.5649 25.763 64.9161 25.1142 64.9068 24.1596H65.8985C65.9263 24.6693 66.2044 24.9289 66.7141 24.9289C67.159 24.9289 67.4278 24.6786 67.4278 24.3357C67.4278 24.002 67.1683 23.8167 66.5102 23.6035C65.5 23.2698 65.0273 22.8806 65.0273 22.0742C65.0273 21.1937 65.6575 20.582 66.6678 20.582Z" fill="#0A0020" fill-opacity="0.7"/>
                        <path className="dark:fill-[#D4C0FF]" d="M66.6678 20.582C67.6317 20.582 68.2434 21.1196 68.2897 22.0557H67.2888C67.2888 21.6479 67.0385 21.4162 66.64 21.4162C66.2693 21.4162 66.0468 21.6293 66.0468 21.9723C66.0468 22.343 66.26 22.4728 66.9551 22.7045C68.0395 23.0752 68.438 23.4923 68.438 24.243C68.438 25.1976 67.7244 25.763 66.7234 25.763C65.5649 25.763 64.9161 25.1142 64.9068 24.1596H65.8985C65.9263 24.6693 66.2044 24.9289 66.7141 24.9289C67.159 24.9289 67.4278 24.6786 67.4278 24.3357C67.4278 24.002 67.1683 23.8167 66.5102 23.6035C65.5 23.2698 65.0273 22.8806 65.0273 22.0742C65.0273 21.1937 65.6575 20.582 66.6678 20.582Z" fill="black" fill-opacity="0.35"/>
                        <path className="dark:fill-[#D4C0FF]" d="M69.4115 20.6747H72.3959V21.6015H70.4217V22.6767H72.1271V23.5664H70.4217V24.7435H72.3959V25.6703H69.4115V20.6747Z" fill="#0A0020" fill-opacity="0.7"/>
                        <path className="dark:fill-[#D4C0FF]" d="M69.4115 20.6747H72.3959V21.6015H70.4217V22.6767H72.1271V23.5664H70.4217V24.7435H72.3959V25.6703H69.4115V20.6747Z" fill="black" fill-opacity="0.35"/>
                        <path className="dark:fill-[#D4C0FF]" d="M73.4845 20.6747H75.0693C76.1815 20.6747 76.8952 21.3142 76.8952 22.2781C76.8952 22.8898 76.6172 23.3254 76.0518 23.5942L77.1176 25.6703H75.9869L75.0415 23.7889H74.4947V25.6703H73.4845V20.6747ZM75.0693 21.6015H74.4947V22.9454H75.0693C75.5606 22.9454 75.8572 22.7137 75.8572 22.2781C75.8572 21.8425 75.5606 21.6015 75.0693 21.6015Z" fill="#0A0020" fill-opacity="0.7"/>
                        <path className="dark:fill-[#D4C0FF]" d="M73.4845 20.6747H75.0693C76.1815 20.6747 76.8952 21.3142 76.8952 22.2781C76.8952 22.8898 76.6172 23.3254 76.0518 23.5942L77.1176 25.6703H75.9869L75.0415 23.7889H74.4947V25.6703H73.4845V20.6747ZM75.0693 21.6015H74.4947V22.9454H75.0693C75.5606 22.9454 75.8572 22.7137 75.8572 22.2781C75.8572 21.8425 75.5606 21.6015 75.0693 21.6015Z" fill="black" fill-opacity="0.35"/>
                        <path className="dark:fill-[#D4C0FF]" d="M81.3397 20.6747H82.4148L80.3851 25.6703H79.4212L77.4007 20.6747H78.4665L79.7919 23.9464L79.8939 24.2893L80.0143 23.9464L81.3397 20.6747Z" fill="#0A0020" fill-opacity="0.7"/>
                        <path className="dark:fill-[#D4C0FF]" d="M81.3397 20.6747H82.4148L80.3851 25.6703H79.4212L77.4007 20.6747H78.4665L79.7919 23.9464L79.8939 24.2893L80.0143 23.9464L81.3397 20.6747Z" fill="black" fill-opacity="0.35"/>
                        <path className="dark:fill-[#D4C0FF]" d="M83.1963 20.6747H84.2065V25.6703H83.1963V20.6747Z" fill="#0A0020" fill-opacity="0.7"/>
                        <path className="dark:fill-[#D4C0FF]" d="M83.1963 20.6747H84.2065V25.6703H83.1963V20.6747Z" fill="black" fill-opacity="0.35"/>
                        <path className="dark:fill-[#D4C0FF]" d="M87.7662 20.582C89.0267 20.582 89.7959 21.2308 90.0925 22.2967H88.9803C88.795 21.7776 88.3872 21.5181 87.7662 21.5181C87.3213 21.5181 86.9598 21.6757 86.6818 21.9815C86.413 22.2874 86.274 22.6859 86.274 23.1679C86.274 23.6498 86.413 24.0484 86.6818 24.3635C86.9598 24.6693 87.3213 24.8269 87.7754 24.8269C88.415 24.8269 88.8413 24.5489 89.0452 24.002H90.1111C89.8145 25.1791 89.0359 25.763 87.7754 25.763C87.0247 25.763 86.4037 25.522 85.9311 25.0308C85.4584 24.5396 85.2267 23.9186 85.2267 23.1679C85.2267 22.4172 85.4584 21.8054 85.9311 21.3142C86.4037 20.823 87.0154 20.582 87.7662 20.582Z" fill="#0A0020" fill-opacity="0.7"/>
                        <path className="dark:fill-[#D4C0FF]" d="M87.7662 20.582C89.0267 20.582 89.7959 21.2308 90.0925 22.2967H88.9803C88.795 21.7776 88.3872 21.5181 87.7662 21.5181C87.3213 21.5181 86.9598 21.6757 86.6818 21.9815C86.413 22.2874 86.274 22.6859 86.274 23.1679C86.274 23.6498 86.413 24.0484 86.6818 24.3635C86.9598 24.6693 87.3213 24.8269 87.7754 24.8269C88.415 24.8269 88.8413 24.5489 89.0452 24.002H90.1111C89.8145 25.1791 89.0359 25.763 87.7754 25.763C87.0247 25.763 86.4037 25.522 85.9311 25.0308C85.4584 24.5396 85.2267 23.9186 85.2267 23.1679C85.2267 22.4172 85.4584 21.8054 85.9311 21.3142C86.4037 20.823 87.0154 20.582 87.7662 20.582Z" fill="black" fill-opacity="0.35"/>
                        <path className="dark:fill-[#D4C0FF]" d="M91.0254 20.6747H94.0098V21.6015H92.0357V22.6767H93.741V23.5664H92.0357V24.7435H94.0098V25.6703H91.0254V20.6747Z" fill="#0A0020" fill-opacity="0.7"/>
                        <path className="dark:fill-[#D4C0FF]" d="M91.0254 20.6747H94.0098V21.6015H92.0357V22.6767H93.741V23.5664H92.0357V24.7435H94.0098V25.6703H91.0254V20.6747Z" fill="black" fill-opacity="0.35"/>
                        <path className="dark:fill-[#D4C0FF]" d="M96.5906 20.582C97.5545 20.582 98.1662 21.1196 98.2126 22.0557H97.2116C97.2116 21.6479 96.9613 21.4162 96.5628 21.4162C96.1921 21.4162 95.9696 21.6293 95.9696 21.9723C95.9696 22.343 96.1828 22.4728 96.8779 22.7045C97.9623 23.0752 98.3608 23.4923 98.3608 24.243C98.3608 25.1976 97.6472 25.763 96.6462 25.763C95.4877 25.763 94.8389 25.1142 94.8296 24.1596H95.8213C95.8491 24.6693 96.1272 24.9289 96.6369 24.9289C97.0818 24.9289 97.3506 24.6786 97.3506 24.3357C97.3506 24.002 97.0911 23.8167 96.433 23.6035C95.4228 23.2698 94.9501 22.8806 94.9501 22.0742C94.9501 21.1937 95.5804 20.582 96.5906 20.582Z" fill="#0A0020" fill-opacity="0.7"/>
                        <path className="dark:fill-[#D4C0FF]" d="M96.5906 20.582C97.5545 20.582 98.1662 21.1196 98.2126 22.0557H97.2116C97.2116 21.6479 96.9613 21.4162 96.5628 21.4162C96.1921 21.4162 95.9696 21.6293 95.9696 21.9723C95.9696 22.343 96.1828 22.4728 96.8779 22.7045C97.9623 23.0752 98.3608 23.4923 98.3608 24.243C98.3608 25.1976 97.6472 25.763 96.6462 25.763C95.4877 25.763 94.8389 25.1142 94.8296 24.1596H95.8213C95.8491 24.6693 96.1272 24.9289 96.6369 24.9289C97.0818 24.9289 97.3506 24.6786 97.3506 24.3357C97.3506 24.002 97.0911 23.8167 96.433 23.6035C95.4228 23.2698 94.9501 22.8806 94.9501 22.0742C94.9501 21.1937 95.5804 20.582 96.5906 20.582Z" fill="black" fill-opacity="0.35"/>
                        <defs>
                        <linearGradient id="paint0_linear_691_9" x1="1.35229" y1="1.10547" x2="26.1612" y2="16.8185" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#33FF00"/>
                        <stop offset="1" stop-color="#16D5E1"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_691_9" x1="41.3234" y1="16.541" x2="37.7852" y2="25.6711" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#15C2CD"/>
                        <stop offset="1" stop-color="#8F1AFF"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_691_9" x1="37.7731" y1="1.10547" x2="31.1829" y2="25.1229" gradientUnits="userSpaceOnUse">
                        <stop offset="0.273514" stop-opacity="0"/>
                        <stop offset="1"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_691_9" x1="20.1984" y1="1.10547" x2="47.5282" y2="28.8092" gradientUnits="userSpaceOnUse">
                        <stop offset="0.165233" stop-color="#2400FF"/>
                        <stop offset="1" stop-color="#B923FF"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_691_9" x1="31.8234" y1="17.2853" x2="37.4822" y2="25.6767" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear_691_9" x1="-80.9742" y1="-5.38484" x2="-35.2667" y2="58.825" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFBEDD"/>
                        <stop offset="1" stop-color="#FF23DC"/>
                        </linearGradient>
                        <linearGradient id="paint6_linear_691_9" x1="30.1212" y1="19.3078" x2="27.7624" y2="25.4269" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#D31FB7"/>
                        <stop offset="1" stop-color="#FFD24D"/>
                        </linearGradient>
                        <linearGradient id="paint7_linear_691_9" x1="31.8883" y1="12.1886" x2="27.3164" y2="25.4131" gradientUnits="userSpaceOnUse">
                        <stop stop-opacity="0"/>
                        <stop offset="1"/>
                        </linearGradient>
                        <linearGradient id="paint8_linear_691_9" x1="2.32334" y1="-4.57337" x2="32.4962" y2="-1.96716" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF7A00"/>
                        <stop offset="1" stop-color="#FFD954"/>
                        </linearGradient>
                        <linearGradient id="paint9_linear_691_9" x1="8.94882" y1="1.10547" x2="17.1715" y2="25.3203" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" stop-opacity="0.5"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint10_linear_691_9" x1="2.32334" y1="-4.57337" x2="32.4962" y2="-1.96716" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF7A00"/>
                        <stop offset="1" stop-color="#FFD954"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    </a>
                </div>

                <div className="md:flex md:items-center md:gap-12">
                    <nav aria-label="Global" className="hidden md:block">
                    <ul className="flex items-center gap-6 text-sm">
                        <li>
                        <a className="text-gray-800 transition hover:text-gray-500/75 dark:text-gray-300 dark:hover:text-[#D4C0FF]/75" href="#about"> About </a>
                        </li>

                        <li>
                        <a className="text-gray-800 transition hover:text-gray-500/75 dark:text-gray-300 dark:hover:text-[#D4C0FF]/75" href="#services"> Services </a>
                        </li>

                        <li>
                        <a className="text-gray-800 transition hover:text-gray-500/75 dark:text-gray-300 dark:hover:text-[#D4C0FF]/75" href="/portfolio"> Portfolio </a>
                        </li>

                        <li>
                        <a className="text-gray-800 transition hover:text-gray-500/75 dark:text-gray-300 dark:hover:text-[#D4C0FF]/75" href="/pricing"> Pricing </a>
                        </li>
                    </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4 hidden sm:block">
                        <a
                        className="rounded-md bg-gradient-to-r from-[#FF7A00] to-[#FFD954] px-5 py-2.5 text-sm poppins-medium text-black shadow dark:text-[#fff]"
                        href="/demo"
                        >
                        CONTACT US
                        </a>
                    </div>

                    <div className="mobile-click-to-view-index-borgarrr block md:hidden">
                        <button className="rounded" onClick={toggleMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        </button>
                    </div>
                    {isOpen && (
                        <div className="mobile-menu absolute top-[14vh] left-0 w-screen bg-white">
                            <div className="flex items-center justify-center h-screen">
                                <ul className="space-y-4 text-center">
                                    <li>
                                    <a className="text-gray-800 transition hover:text-gray-500/75 dark:text-gray-300 dark:hover:text-[#D4C0FF]/75" href="#about" onClick={toggleMenu}> About </a>
                                    </li>

                                    <li>
                                    <a className="text-gray-800 transition hover:text-gray-500/75 dark:text-gray-300 dark:hover:text-[#D4C0FF]/75" href="#services" onClick={toggleMenu}> Services </a>
                                    </li>

                                    <li>
                                    <a className="text-gray-800 transition hover:text-gray-500/75 dark:text-gray-300 dark:hover:text-[#D4C0FF]/75" href="/portfolio"> Portfolio </a>
                                    </li>

                                    <li>
                                    <a className="text-gray-800 transition hover:text-gray-500/75 dark:text-gray-300 dark:hover:text-[#D4C0FF]/75" href="/contact"> Contact Us </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
                </div>
            </div>
        </header>
    )
    
}


export default NavBar;