import React, {forwardRef, PropsWithChildren} from "react"
import Box from "../../common/Box"

const Component: React.ForwardRefRenderFunction<any, PropsWithChildren<any>> = (props, ref) => {

    const {width} = props

    const fWidth = width ? width : 100
    const fHeight = 0.38 * fWidth

    return (
        <Box
            ref={ref}
            {...props}
            __css={{}}
        >
            <svg width={fWidth} height={fHeight} viewBox="0 0 100 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                    <path
                        d="M57.6604 17.606V18.6563H44.0074V17.606H50.4071V16.0091H46.0213V14.9785H50.3914V13.5585H46.5209C46.2534 13.9519 45.9741 14.298 45.6831 14.6481C45.392 14.9982 45.0931 15.3443 44.7823 15.6865L43.9406 14.8998C44.5092 14.3198 45.035 13.6993 45.5139 13.0432C45.9943 12.3927 46.408 11.6956 46.749 10.9624L47.7639 11.5131C47.6773 11.6862 47.5869 11.8553 47.4964 12.0205C47.4059 12.1857 47.3115 12.351 47.2132 12.5122H50.3914V11.3322L51.6344 11.3794V12.524H56.9681V13.5703H51.6501V14.9903H56.4371V16.0091H51.6501V17.606H57.6604ZM56.0005 10.9192H45.7145V5.41235H56.0005V10.9192ZM46.9064 6.41932V7.68982H54.8087V6.41932H46.9064ZM54.8087 9.95942V8.67318H46.9064V9.94762L54.8087 9.95942Z"
                        fill="#2050CB"/>
                    <path
                        d="M74.1218 17.8145V18.8805H59.5956V17.8145H61.4364V14.2193C61.3616 14.2943 61.2829 14.3652 61.2004 14.4317C61.1218 14.4947 61.0352 14.5655 60.9526 14.6402L60.0322 13.8181C60.4255 13.527 60.7324 13.2556 61.0077 13.0039C61.2593 12.7763 61.4909 12.5276 61.7 12.2605C61.8758 12.0366 62.0262 11.7938 62.1484 11.5367C62.2646 11.286 62.3492 11.0217 62.4001 10.75H59.985V9.69193H62.5142V6.04562H65.661C65.7554 5.79913 65.8458 5.55525 65.9324 5.314C66.0189 5.07013 66.0897 4.86952 66.1448 4.70825L67.3248 4.88526C67.2815 5.03473 67.2225 5.21567 67.1478 5.41627C67.0731 5.61688 66.9905 5.83322 66.9039 6.04562H71.7106V9.69193H73.7914V10.7382H71.7106V11.9183C71.7146 12.1703 71.6922 12.4221 71.6437 12.6695C71.6095 12.8521 71.5266 13.0219 71.4038 13.1612C71.2703 13.3001 71.1039 13.403 70.92 13.4602C70.664 13.5393 70.4003 13.5907 70.1333 13.6136L69.087 13.7237L68.6936 12.6774L69.5315 12.6145C69.8078 12.614 70.0791 12.5407 70.3182 12.4021C70.3973 12.3129 70.4562 12.2077 70.4908 12.0936C70.5255 11.9796 70.535 11.8594 70.5188 11.7413V10.7382H63.6274C63.5788 11.0619 63.5011 11.3805 63.3953 11.6901C63.2961 11.9833 63.1642 12.2644 63.0019 12.5279C62.8267 12.8097 62.6238 13.0732 62.3962 13.3146C62.1602 13.5664 61.8888 13.8338 61.5741 14.1013H72.2967V17.8066L74.1218 17.8145ZM62.6125 17.8145H64.7405V15.1712H62.6125V17.8145ZM63.6903 9.69193H67.7536C67.6828 9.60707 67.6051 9.52814 67.5215 9.45592C67.4074 9.35365 67.2776 9.24352 67.1281 9.11765L66.6522 8.7243L66.1841 8.35062C66.0386 8.24049 65.9127 8.14608 65.7908 8.07135C65.7254 8.0217 65.6557 7.97825 65.5823 7.94155L66.1959 7.21779C66.3606 7.27209 66.5139 7.35607 66.6483 7.4656C66.8712 7.62294 67.1072 7.79994 67.3563 7.99661C67.6041 8.19722 67.8283 8.38996 68.0328 8.56303C68.1636 8.66461 68.2823 8.78074 68.3868 8.90917L67.8086 9.69586H70.5306V7.08012H63.6903V9.69193ZM67.5451 13.3186C67.1517 12.9724 66.8017 12.6538 66.4398 12.3509C66.0872 12.0599 65.7124 11.7968 65.3187 11.5643L65.9481 10.7776C66.2588 10.9624 66.6247 11.2024 67.0377 11.4974C67.4357 11.7805 67.8106 12.0948 68.1587 12.4375L67.5451 13.3186ZM67.8991 15.1712H65.8183V17.8145H67.8991V15.1712ZM71.1088 15.1712H68.9808V17.8145H71.1088V15.1712Z"
                        fill="#2050CB"/>
                    <path
                        d="M18.7468 3.19789L34.2996 18.7468L18.7468 34.2996L3.19789 18.7468L18.7468 3.19789ZM18.7468 0L0 18.7468L18.7468 37.4975L37.4975 18.7468L18.7468 0Z"
                        fill="#2050CB"/>
                    <path
                        d="M18.7469 22.3027L15.195 18.7468H11.9971L18.7469 25.5006L25.5006 18.7468H22.3027L18.7469 22.3027Z"
                        fill="#2050CB"/>
                    <path
                        d="M18.7467 9.55822L27.9353 18.7467H31.1332L18.7467 6.36426L6.36426 18.7467H9.55822L18.7467 9.55822Z"
                        fill="#2050CB"/>
                    <path
                        d="M30.6691 19.0339L18.7469 30.9562L6.82852 19.0339H6.47058L18.7469 31.3102L31.0232 19.0339H30.6691Z"
                        fill="url(#paint0_linear)"/>
                    <path
                        d="M45.7892 30.5669C45.5375 30.5669 45.2857 30.5669 45.0379 30.5354C44.7901 30.5039 44.5541 30.4921 44.3378 30.4607C44.1214 30.4292 43.9444 30.3938 43.7596 30.3584C43.6258 30.3318 43.4943 30.295 43.3662 30.2483V29.2649C43.5124 29.32 43.6622 29.3646 43.8146 29.3986C43.9956 29.4419 44.208 29.4813 44.4086 29.5167C44.6092 29.5521 44.8452 29.5796 45.0812 29.5993C45.3172 29.6189 45.5611 29.6307 45.8049 29.6307C46.2912 29.6615 46.7764 29.5552 47.2053 29.3239C47.372 29.2009 47.5033 29.0362 47.5862 28.8463C47.6691 28.6564 47.7005 28.4481 47.6773 28.2422C47.6825 28.0286 47.6573 27.8154 47.6025 27.6089C47.5497 27.4395 47.4485 27.2891 47.3115 27.1762C47.1366 27.0411 46.9396 26.9373 46.7293 26.8694C46.4854 26.7829 46.1708 26.6924 45.7813 26.598C45.4194 26.5136 45.0634 26.4059 44.7154 26.2755C44.4527 26.1833 44.2108 26.0403 44.0034 25.8546C43.8231 25.683 43.688 25.4695 43.6101 25.2331C43.5208 24.9375 43.4796 24.6293 43.4881 24.3206C43.465 24.0088 43.5131 23.6959 43.629 23.4055C43.7449 23.1152 43.9254 22.8551 44.1568 22.6449C44.6013 22.2791 45.2936 22.0942 46.2258 22.0942C46.4225 22.0942 46.6192 22.0942 46.8237 22.1178C47.0283 22.1414 47.2171 22.1572 47.4019 22.1847C47.5868 22.2122 47.7599 22.2437 47.9133 22.2791C48.0406 22.3058 48.1655 22.3427 48.287 22.3892V23.3608C47.9858 23.2589 47.6766 23.1825 47.3626 23.1327C46.9913 23.0658 46.6149 23.0316 46.2376 23.0304C45.9874 23.0283 45.7375 23.0467 45.4903 23.0855C45.3006 23.1121 45.1184 23.1777 44.9553 23.2782C44.814 23.3745 44.7056 23.5118 44.6446 23.6716C44.568 23.879 44.5332 24.0996 44.5423 24.3206C44.5388 24.486 44.556 24.6511 44.5934 24.8123C44.6307 24.9543 44.7119 25.081 44.8255 25.1741C44.9787 25.2959 45.1516 25.3904 45.3369 25.4534C45.6275 25.5574 45.9244 25.6428 46.2258 25.7091C46.6262 25.8005 47.0204 25.9174 47.4059 26.0592C47.6979 26.1586 47.9659 26.318 48.1925 26.5272C48.3904 26.7184 48.5365 26.9566 48.6174 27.2195C48.7116 27.548 48.7553 27.8888 48.7472 28.2304C48.7753 28.5637 48.7228 28.8989 48.5941 29.2077C48.4653 29.5165 48.2642 29.7897 48.0077 30.0044C47.3501 30.4307 46.5704 30.6284 45.7892 30.5669V30.5669Z"
                        fill="#2050CB"/>
                    <path
                        d="M53.5263 23.931C53.88 23.9207 54.2329 23.9726 54.5686 24.0844C54.8151 24.165 55.0368 24.3075 55.2124 24.4982C55.3881 24.689 55.5118 24.9217 55.5717 25.174C55.6417 25.449 55.6761 25.732 55.6739 26.0158V30.4488H54.6748V26.3973C54.6755 26.176 54.6584 25.955 54.6237 25.7365C54.5999 25.5638 54.5381 25.3986 54.4428 25.2527C54.3429 25.1166 54.2065 25.0115 54.0494 24.9498C53.8516 24.8728 53.6402 24.8367 53.4279 24.8436C53.228 24.8426 53.0282 24.8557 52.8301 24.8829C52.6403 24.9127 52.4569 24.9739 52.2872 25.0639C52.1069 25.1613 51.9488 25.2953 51.8231 25.4572C51.667 25.6569 51.5521 25.8855 51.4848 26.1298V30.4566H50.4661V21.4412H51.4848V24.9813C51.5729 24.7869 51.7001 24.6128 51.8585 24.4699C52.0082 24.3395 52.1783 24.2346 52.362 24.1592C52.5464 24.083 52.7392 24.0289 52.9363 23.9979C53.1309 23.9605 53.3282 23.9382 53.5263 23.931V23.931Z"
                        fill="#2050CB"/>
                    <path
                        d="M60.3627 30.5669C59.9376 30.5725 59.5139 30.5182 59.104 30.4056C58.7511 30.3093 58.4297 30.1221 58.1718 29.8628C57.902 29.5737 57.7052 29.2245 57.5975 28.844C57.3352 27.7969 57.3352 26.7012 57.5975 25.654C57.7043 25.2732 57.9013 24.9238 58.1718 24.6353C58.4297 24.376 58.7511 24.1888 59.104 24.0924C59.9307 23.8774 60.7986 23.8774 61.6253 24.0924C61.9734 24.1893 62.2896 24.3766 62.5418 24.6353C62.811 24.9241 63.0066 25.2736 63.1122 25.654C63.3744 26.7012 63.3744 27.7969 63.1122 28.844C63.0058 29.2242 62.8102 29.5734 62.5418 29.8628C62.2874 30.1227 61.9684 30.3101 61.6175 30.4056C61.2088 30.5177 60.7864 30.572 60.3627 30.5669V30.5669ZM60.3627 29.7015C60.6699 29.7096 60.9764 29.6698 61.2713 29.5835C61.4995 29.5164 61.7006 29.3787 61.8456 29.1902C62.003 28.9649 62.1066 28.7066 62.1485 28.435C62.2126 28.045 62.2416 27.6501 62.235 27.2549C62.2415 26.8595 62.2099 26.4643 62.1406 26.0749C62.0959 25.8009 61.9882 25.541 61.8259 25.3157C61.675 25.1318 61.4742 24.9953 61.2477 24.9224C60.9613 24.8339 60.6624 24.7927 60.3627 24.8005C60.0604 24.7923 59.7588 24.8335 59.4698 24.9224C59.2426 24.9962 59.0409 25.1325 58.8876 25.3157C58.7281 25.5417 58.6231 25.8015 58.5808 26.0749C58.5151 26.4647 58.4848 26.8597 58.4904 27.2549C58.4831 27.6506 58.516 28.046 58.5887 28.435C58.6338 28.7083 58.743 28.9671 58.9073 29.1902C59.0569 29.3774 59.26 29.5146 59.4895 29.5835C59.7724 29.6689 60.0672 29.7087 60.3627 29.7015V29.7015Z"
                        fill="#2050CB"/>
                    <path
                        d="M68.198 23.9311C68.651 23.9163 69.1018 23.9995 69.5197 24.175C69.8394 24.3253 70.1116 24.5607 70.3064 24.8555C70.5089 25.1745 70.6428 25.5322 70.6997 25.9057C70.7769 26.3486 70.8138 26.7975 70.8099 27.247C70.8124 27.6704 70.7755 28.0931 70.6997 28.5097C70.6393 28.8835 70.5056 29.2418 70.3064 29.5638C70.1121 29.8719 69.841 30.124 69.5197 30.2954C69.1073 30.4908 68.654 30.5839 68.198 30.5669C67.7073 30.6011 67.2178 30.4859 66.7938 30.2364C66.4815 30.0142 66.2474 29.6989 66.1251 29.3357V32.8168H65.1024V24.0491H66.1251V25.1977C66.2505 24.8307 66.4852 24.5109 66.7977 24.2812C67.2165 24.0211 67.7062 23.8987 68.198 23.9311V23.9311ZM68.0682 29.7015C68.3832 29.7163 68.6962 29.6442 68.9729 29.493C69.1923 29.3607 69.3707 29.17 69.4882 28.9423C69.6121 28.6961 69.6907 28.4297 69.7203 28.1557C69.7554 27.8541 69.7725 27.5506 69.7714 27.247C69.7727 26.9288 69.753 26.6108 69.7124 26.2951C69.6803 26.0211 69.6005 25.7549 69.4764 25.5084C69.3591 25.2857 69.1802 25.1014 68.9611 24.9774C68.6864 24.8334 68.3781 24.7655 68.0682 24.7808C67.74 24.7689 67.4129 24.8266 67.1085 24.9499C66.864 25.0585 66.6524 25.2294 66.4949 25.4455C66.3323 25.6816 66.2223 25.9499 66.1723 26.2322C66.1043 26.5687 66.0726 26.9116 66.0779 27.2549C66.0726 27.593 66.1042 27.9306 66.1723 28.2619C66.2212 28.5445 66.3313 28.813 66.4949 29.0485C66.6522 29.2659 66.8638 29.4381 67.1085 29.5481C67.4135 29.6682 67.741 29.7205 68.0682 29.7015V29.7015Z"
                        fill="#2050CB"/>
                    <path
                        d="M77.308 27.9942H73.6695L72.7688 30.4487H71.6792L74.7984 22.2239H76.2184L79.3219 30.4487H78.1969L77.308 27.9942ZM76.9658 27.0463L75.5772 23.2072H75.4356L74.0275 27.0345L76.9658 27.0463Z"
                        fill="#2050CB"/>
                    <path
                        d="M82.0124 30.5197C81.855 30.5197 81.6859 30.5197 81.5089 30.5197L80.9818 30.4803C80.8087 30.4803 80.6475 30.441 80.5019 30.4135C80.3564 30.3859 80.2384 30.3623 80.1519 30.3387V29.4419C80.262 29.4734 80.3957 29.5048 80.5452 29.5363C80.6947 29.5678 80.8599 29.5953 81.0251 29.6189C81.1903 29.6425 81.3594 29.6583 81.5286 29.674C81.6977 29.6897 81.855 29.674 81.9966 29.674C82.3778 29.6952 82.7584 29.6237 83.1059 29.4655C83.2402 29.3862 83.3488 29.2697 83.4186 29.1302C83.4884 28.9906 83.5164 28.8339 83.4992 28.6788C83.5025 28.521 83.484 28.3635 83.4441 28.2107C83.4085 28.0892 83.3355 27.9819 83.2357 27.9039C83.1056 27.8055 82.9591 27.7309 82.803 27.6837C82.6181 27.6207 82.3703 27.5539 82.0635 27.4831C81.7623 27.4223 81.4683 27.33 81.1863 27.2077C80.9832 27.1225 80.7988 26.9982 80.6435 26.8419C80.5069 26.6994 80.4082 26.525 80.3564 26.3345C80.2978 26.1058 80.27 25.8704 80.2738 25.6343C80.2672 25.3979 80.314 25.163 80.4107 24.9471C80.5074 24.7312 80.6515 24.5399 80.8323 24.3874C81.3369 24.037 81.9465 23.8704 82.5591 23.9154C82.8656 23.9154 83.1717 23.9351 83.4756 23.9744C83.7116 23.9982 83.944 24.0497 84.1679 24.1278L84.0971 24.9932C83.8792 24.9125 83.6539 24.8532 83.4245 24.8162C83.1425 24.768 82.857 24.7443 82.5709 24.7454C82.2223 24.7242 81.8738 24.7891 81.5561 24.9342C81.4383 25.0146 81.3447 25.1255 81.2851 25.2551C81.2255 25.3847 81.2022 25.528 81.2178 25.6697C81.215 25.803 81.2336 25.9358 81.2729 26.0631C81.3082 26.1668 81.3707 26.2592 81.4538 26.3306C81.5642 26.416 81.6896 26.4801 81.8236 26.5194C81.9809 26.5705 82.1854 26.6256 82.4372 26.6806C82.7538 26.7529 83.0652 26.8462 83.3694 26.9599C83.5978 27.0416 83.8087 27.1657 83.9909 27.3257C84.149 27.474 84.2679 27.6592 84.337 27.8646C84.414 28.1195 84.4498 28.3851 84.4432 28.6513C84.4652 28.919 84.4194 29.188 84.3101 29.4334C84.2008 29.6788 84.0315 29.8927 83.8178 30.0555C83.2782 30.3926 82.6476 30.5547 82.0124 30.5197Z"
                        fill="#2050CB"/>
                    <path
                        d="M88.1958 29.666C88.3202 29.673 88.445 29.673 88.5694 29.666C88.6791 29.6548 88.7881 29.6377 88.8959 29.6149V30.4803L88.5419 30.5196C88.4188 30.5262 88.2953 30.5262 88.1722 30.5196C87.8726 30.524 87.5734 30.4977 87.2793 30.4409C87.0563 30.3992 86.8501 30.294 86.6853 30.1381C86.5189 29.9661 86.4043 29.7507 86.3549 29.5166C86.2798 29.181 86.2455 28.8376 86.2526 28.4939V24.9026H85.3047V24.0491H86.2526V22.5308H87.2714V24.0491H88.8448V24.9026H87.2714V28.4427C87.2695 28.648 87.2827 28.853 87.3107 29.0564C87.3207 29.1968 87.3668 29.3323 87.4445 29.4497C87.5142 29.5417 87.6124 29.6081 87.7238 29.6385C87.879 29.6698 88.0379 29.6791 88.1958 29.666V29.666Z"
                        fill="#2050CB"/>
                    <path
                        d="M93.3761 23.9312L93.3407 24.8555H93.1991C92.9957 24.8551 92.7928 24.8748 92.5933 24.9145C92.1809 24.9974 91.8139 25.23 91.5628 25.5675C91.4071 25.7767 91.2911 26.0126 91.2205 26.2637V30.4489H90.2018V24.0492H91.2205V25.2292C91.31 24.9902 91.4434 24.7701 91.6139 24.5802C91.754 24.4186 91.9235 24.2851 92.1134 24.1868C92.2879 24.0927 92.4766 24.0276 92.672 23.9941C92.8658 23.9632 93.0618 23.9474 93.2581 23.9469L93.3761 23.9312Z"
                        fill="#2050CB"/>
                    <path
                        d="M97.0498 30.5668C96.6235 30.5726 96.1984 30.5183 95.7872 30.4055C95.4347 30.3083 95.1135 30.1212 94.855 29.8627C94.5852 29.5736 94.3884 29.2243 94.2807 28.8439C94.1393 28.3238 94.0744 27.7858 94.0879 27.2469C94.0765 26.7159 94.1414 26.1861 94.2807 25.6735C94.3875 25.2928 94.5845 24.9433 94.855 24.6548C95.1135 24.3962 95.4347 24.2092 95.7872 24.112C96.6152 23.8969 97.4844 23.8969 98.3125 24.112C98.6618 24.2085 98.9794 24.3958 99.2329 24.6548C99.5021 24.9436 99.6977 25.2931 99.8032 25.6735C100.066 26.7207 100.066 27.8164 99.8032 28.8636C99.6968 29.2437 99.5013 29.5929 99.2329 29.8823C98.9794 30.1413 98.6618 30.3286 98.3125 30.4252C97.9002 30.5309 97.4752 30.5785 97.0498 30.5668V30.5668ZM97.0498 29.7014C97.3557 29.7092 97.6609 29.6693 97.9545 29.5834C98.1827 29.5163 98.3838 29.3786 98.5288 29.1901C98.6862 28.9648 98.7898 28.7064 98.8317 28.4348C98.8973 28.045 98.9276 27.6501 98.9222 27.2548C98.9286 26.8593 98.897 26.4642 98.8278 26.0748C98.7796 25.8017 98.6722 25.5426 98.5131 25.3156C98.3599 25.1324 98.1581 24.996 97.9309 24.9223C97.6458 24.8341 97.3482 24.7929 97.0498 24.8003C96.7463 24.7922 96.4434 24.8334 96.153 24.9223C95.9265 24.9951 95.7258 25.1317 95.5748 25.3156C95.4123 25.5403 95.3057 25.8006 95.264 26.0748C95.1998 26.4647 95.1709 26.8596 95.1775 27.2548C95.1711 27.6503 95.2027 28.0454 95.2719 28.4348C95.317 28.7082 95.4262 28.967 95.5905 29.1901C95.7401 29.3772 95.9432 29.5144 96.1727 29.5834C96.457 29.669 96.753 29.7088 97.0498 29.7014V29.7014Z"
                        fill="#2050CB"/>
                </g>
                <defs>
                    <linearGradient id="paint0_linear" x1="18.7469" y1="31.3102" x2="18.7469" y2="19.0339"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#08489D"/>
                        <stop offset="0.77" stopColor="#08489D" stopOpacity="0"/>
                    </linearGradient>
                    <clipPath id="clip0">
                        <rect width="100" height="37.4975" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </Box>
    )
};

Component.displayName = 'BizLogo';
export default forwardRef(Component);