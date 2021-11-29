import React from "react";

import "./index.scss";

type IProps = {
  state: "init" | "show" | "hide";
};

const IndexPage: React.FC<IProps> = (props) => {
  const { state } = props;
  return (
    <div className="policy-container">
      <div className="pg-viewer-wrapper">
        <div className="pg-viewer" id="pg-viewer">
          <div id="docx">
            <div className="document-container">
              <p>
                <strong>Privacy&nbsp;policy</strong>
              </p>
              <p>Release Date: 2021 [Date] of [Month]</p>
              <p>Effective date: 2021 [Date] of [Month]</p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>Introduction</strong>
              </p>
              <p>
                SHOPASTRO product and/or service platform (hereinafter referred
                to as “SHOPASTRO” or “Platform”) is owned and operated by
                ShopAstro (Hangzhou) Network Technology Co., Ltd. (registered
                address: Room 1701&nbsp;Times Future City Building 5, Cangqian
                Street, Yuhang District, Hangzhou City, Zhejiang Province) and
                its affiliates (hereinafter collectively referred to as "we"),
                providing online shops to seller users (hereinafter referred to
                as "users", "you" or "sellers")&nbsp;through SHOPASTRO website
                [&nbsp;<em>fill in website address&nbsp;</em>] A SaaS platform
                with complete solutions for site building, traffic, payment and
                logistics.&nbsp;
              </p>
              <p>&nbsp;</p>
              <p>
                When you use our platform, we may collect and use relevant
                information about you (including employees and/or those who
                operate business on your behalf) and the processing personal
                information of your end users (hereinafter collectively referred
                to as "personal information subjects") entrusted by you.&nbsp;We
                are well aware of the importance of personal information to the
                subject of personal information. We have formulated the
                "SHOPASTRO Privacy Policy" (hereinafter referred to as the
                "Policy") in accordance with applicable laws and regulations,
                and are committed to protecting the personal information
                security of you and/or your end users.
              </p>
              <p>&nbsp;</p>
              <p>
                We hope to use this policy to explain to the subject of personal
                information how SHOPASTRO collects, uses, stores, share,
                transfer, and publicly discloses the purpose, method, scope and
                information security protection measures of personal information
                in the process of providing products and/or services, and enable
                personal information subjects to realize the rights and methods
                to manage their personal information.&nbsp;Please read this
                policy in conjunction with the "SHOPASTRO User
                Agreement".&nbsp;The following are our special tips, please pay
                attention:
              </p>
              <p>&nbsp;</p>
              <p>
                1. SHOPASTRO mainly provides services for corporate customers,
                so this policy is only applicable to SHOPASTRO's direct
                processing of personal information of corporate customers'
                employees and authorized operators.&nbsp;In addition, if our
                corporate customers embed our services in their products (such
                as our website building services, etc.), entrusted by the
                corporate customers, they need to process the end user’s
                personal information in the process of providing products to the
                end user, we acting only as a personal information processor,
                processing the personal information of its end users in
                accordance with agreements reached with corporate
                customers.&nbsp;As the personal information controller,
                corporate customers assume all responsibilities to their end
                users and are obliged to disclose to end users how to handle and
                protect the personal information of end users.&nbsp;You should
                display the specific content of the privacy policy to your end
                users and provide them with consultation and response to rights
                requests.
              </p>
              <p>&nbsp;</p>
              <p>
                2. For all key content, we use the "&nbsp;
                <strong>bold&nbsp;</strong>" or "&nbsp;
                <strong>bold and underline&nbsp;</strong>" writing method for
                prompting.&nbsp;For&nbsp;
                <strong>
                  <em>personal sensitive information</em>
                </strong>
                , we use the "&nbsp;
                <strong>
                  <em>bold italic&nbsp;</em>
                </strong>
                " writing method to make special reminders, and we hope you will
                pay special attention to it when you read it.&nbsp;Before you
                provide us with any of your&nbsp;
                <strong>
                  <em>personal sensitive information&nbsp;</em>
                </strong>
                , you have carefully considered and hereby confirm that such
                provision is appropriate. You hereby agree that your&nbsp;
                <strong>
                  <em>personal sensitive information&nbsp;</em>
                </strong>
                can be processed in accordance with the purposes and methods
                described in this policy.
              </p>
              <p>&nbsp;</p>
              <p>
                3.&nbsp;
                <strong>
                  SHOPASTRO only provides services to users who are 18 or
                  older.&nbsp;For minors under the age of 18, we do not collect
                  and will not provide any products and/or services of this
                  platform to them.&nbsp;Before using our products and/or
                  services, please confirm that users have met the age
                  requirements, and carefully read and understand the detailed
                  information in this policy.&nbsp;
                </strong>
                We will not knowingly collect the personal information of minors
                under the age of 18.&nbsp;If you find that we have
                unintentionally collected personal information of minors, please
                notify us immediately and we will try to delete the relevant
                data as soon as possible.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                4. The ways we provide you with the realization of your personal
                information rights include, but are not limited to, access or
                correction, deletion of your personal information, account
                cancellation, withdrawal of consent, and timely response, etc.,
                to ensure that you achieve control over your personal
                information.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>
                  5. Before using this platform, please be sure to read and
                  thoroughly understand this policy, and use the relevant
                  products and/or services of this platform after confirming
                  your full understanding and consent.&nbsp;We recommend that
                  when you use the products and/or services of this platform,
                  you have obtained legal authorization and made wise decisions
                  about the relevant personal information subject information
                  you provided.&nbsp;If you disagree with any content of this
                  policy, you should stop using SHOPASTRO immediately.
                </strong>
              </p>
              <p>&nbsp;</p>
              <p>
                6.&nbsp;In order to facilitate the reading and understanding of
                relevant personal information subjects, we use sentences that
                are as simple and understandable as possible and define the
                following key terms. Please refer to the "Appendix:&nbsp;
                <strong>Keyword Definitions&nbsp;</strong>" of&nbsp;this policy.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>
                  This policy will help you understand the following:
                </strong>
              </p>
              <p>
                <strong>
                  1. How we collect and use personal information of personal
                  information subjects
                </strong>
              </p>
              <p>
                <strong>
                  2. How do we use cookies and other similar tracking
                  technologies
                </strong>
              </p>
              <p>
                <strong>
                  3. How do we entrust the processing, sharing, transfer, and
                  public disclosure of personal information subjects'
                  information
                </strong>
              </p>
              <p>
                <strong>
                  4. How to enable you to have the power to manage personal
                  information
                </strong>
              </p>
              <p>
                <strong>5. How to save and protect personal information</strong>
              </p>
              <p>
                <strong>
                  6. How to protect the personal information of minors
                </strong>
              </p>
              <p>
                <strong>7. How to update this policy</strong>
              </p>
              <p>
                <strong>8. Jurisdiction and application of law</strong>
              </p>
              <p>
                <strong>9. How to contact us</strong>
              </p>
              <p>
                <strong>10. Keyword definition</strong>
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>
                  1. How to collect and use personal information of personal
                  information subjects
                </strong>
              </p>
              <p>
                In accordance with the principles of lawfulness, fairness and
                necessity, in order to realize the functions described in this
                policy, we collect and use the information that&nbsp;you
                proactively provide during the use of this platform, the
                information generated by your use of this platform, and the
                information we obtain from third parties. Personal information
                of relevant personal information subjects.&nbsp;Regardless of
                the above-mentioned methods to collect and use the personal
                information of the relevant personal information subject,&nbsp;
                <strong>
                  we will only proceed with your authorization.&nbsp;Please
                  ensure that you have obtained the consent of your end
                  users,&nbsp;
                </strong>
                unless under certain circumstances, based on legal obligations
                or may need to protect your or other people's important
                interests, collect personal information from relevant personal
                information subjects.
              </p>
              <p>&nbsp;</p>
              <p>
                Please understand that due to changes in business strategies,
                the functions of the platform's products and/or services may
                also undergo changes and developments.&nbsp;If we want to use
                the personal information of the relevant personal information
                subject&nbsp;for other purposes not specified in this policy, or
                collect and use the&nbsp;personal information of the relevant
                personal information subject&nbsp;for&nbsp;other specific
                purposes&nbsp;, we will inform you in a reasonable manner, and
                Obtain your consent again before collection and use.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>
                  (1) In the process of providing you with products and/or
                  services, you actively provide personal information
                </strong>
              </p>
              <p>
                <strong>1) Register/Login Account</strong>
              </p>
              <p>
                In order to use the platform, you first need to register
                a&nbsp;SHOPASTRO&nbsp;account to become our user.&nbsp;Based on
                this, you need to provide us with the email address required to
                register your account, the mobile phone number in mainland
                China, the login password and the verification code we sent to
                you to verify your identity.
              </p>
              <p>
                After completing the registration, you can choose to log in via
                mobile phone number + verification code or email + login
                password, and then browse and use&nbsp;SHOPASTRO&nbsp;as a
                registered user&nbsp;.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>2) Create a trial shop</strong>
              </p>
              <p>
                In the process of creating a trial store, if you also want other
                operators to use their mailbox to log in to the store for store
                management, you need to provide the e-mail address of the store
                operator.&nbsp;Please ensure that you have obtained the consent
                of other persons when providing their personal information.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>3) Customer Management</strong>
              </p>
              <p>
                After creating a store, you can import registered/ordered
                customer information for store operation and customer
                management.&nbsp;Please ensure that the personal information of
                other persons imported by you has obtained the consent to use
                their personal information in this way at the time of
                collection.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>4) Paid features</strong>
              </p>
              <p>
                When you use SHOPASTRO's payment function, we will collect
                your&nbsp;
                <strong>
                  <em>payment records&nbsp;</em>
                </strong>
                so that you can check the transaction records that have occurred
                on the platform, while doing our best to protect the safety of
                your property and virtual property.&nbsp;The above information
                is&nbsp;
                <strong>
                  <em>sensitive personal information&nbsp;</em>
                </strong>
                , please do not provide it to a third party
                arbitrarily.&nbsp;The collection of the above information is
                necessary to realize the relevant functions, otherwise the
                transaction will not be completed.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>5) Upload/publish content</strong>
              </p>
              <p>
                We will collect content information that you upload or publish
                on this platform, including text, shared photos, audio, video,
                and the date, time and location of such information.&nbsp;When
                you use the above functions, we will ask you for authorization
                to use the camera, photo album, microphone and location
                permissions in your terminal device.&nbsp;You can choose whether
                to provide us with such authorization. If you refuse, you will
                not be able to use the relevant functions, but it will not
                affect your use of other functions of SHOPASTRO.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>6) Advertising agency investment</strong>
              </p>
              <p>
                In order to help you better increase store traffic and achieve
                customer growth, we will provide advertising agency services,
                and place your store/product/service advertisements on relevant
                advertising platforms in your name.&nbsp;Under this function, we
                may transmit your relevant information to the advertising
                platform and/or use the pictures, text, videos and other
                materials in the store page provided by you. Please make sure
                that the relevant materials do not contain your or user's
                personal information .&nbsp;If relevant personal information is
                included, please ensure that you have obtained the consent of
                the subject of personal information.&nbsp;If you are not sure
                whether the material contains personal information or cannot
                obtain authorization, please do not use this function, but it
                will not affect your use of other functions of SHOPASTRO.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>7) Product recommendation</strong>
              </p>
              <p>
                When you need to recommend products on the product detail page,
                in order to achieve a more accurate recommendation effect, we
                will collect your end user&nbsp;
                <strong>
                  <em>browsing data and behavioral data&nbsp;</em>
                </strong>
                .&nbsp;When choosing this service, please ensure that you have
                informed the end users of the collection and use of relevant
                information and obtained their consent.&nbsp;If you are unable
                to ensure that your end user has agreed to the collection of the
                above-mentioned information, please do not use this function,
                but it will not affect your use of other functions of SHOPASTRO.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>8) Add swatches</strong>
              </p>
              <p>
                When you use the add swatch function (including swatch
                management, swatch creation/editing, custom product swatches,
                and color spot appearance configuration), we will collect and
                use your store data (including seller ID and store ID) to
                Correspond the operation of your added color palette to your
                shop.&nbsp;If you refuse to provide such information, please do
                not use this function, but it will not affect your use of other
                functions of SHOPASTRO.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>9) Add shopping cart</strong>
              </p>
              <p>
                When your end user uses the "add shopping cart" function, in
                order to make the operation correspond to your store, we will
                collect and use your store ID to complete the transaction
                between you and your end user.&nbsp;If you refuse to provide
                such information, please do not use this feature.&nbsp;We remind
                you that the effect of your website construction will be
                affected, but it will not affect your use of other functions of
                SHOPASTRO.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>10) Credit card payment</strong>
              </p>
              <p>
                &nbsp;When you or your end user uses a credit or debit card to
                make a payment, we will collect and use&nbsp;
                <strong>
                  <em>card-related information of&nbsp;</em>
                </strong>
                you or your end user to complete the payment action of you or
                your end user.&nbsp;The above information is&nbsp;
                <strong>
                  <em>sensitive personal information&nbsp;</em>
                </strong>
                , please do not provide it to a third party
                arbitrarily.&nbsp;The collection of the above information is
                necessary to realize the relevant functions, otherwise the
                transaction will not be completed.&nbsp;If you refuse to provide
                such information, please do not use this feature.&nbsp;We remind
                you that the effect of your website construction will be
                affected, but it will not affect your use of other functions of
                SHOPASTRO.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>11) Customer Service</strong>
              </p>
              <p>
                In order to improve the quality of service, when contacting our
                customer service team, we may ask you to provide phone number,
                WeChat account number and surname information in order to
                communicate and serve you with customer service.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>
                  (2) Personal information we actively collect in the process of
                  providing platform services to you
                </strong>
              </p>
              <p>
                Under the premise of complying with laws and regulations, in
                order to better provide you with services and protect the
                security of your account, when you browse and search in
                SHOPASTRO, we will collect and use the products and/or services
                you generate during the use of our products and/or services. The
                device information and log information are as follows:
              </p>
              <p>
                <strong>Device information:&nbsp;</strong>We will collect your
                personal commonly used device information, including IP address,
                device model, device identification code, operating system,
                resolution, and telecom operator.
              </p>
              <p>
                <strong>Log information:&nbsp;</strong>We will automatically
                collect detailed information about your use of this platform and
                save it as a network log, including network diagnosis, stuck
                information, click events, level success or failure,&nbsp;
                <strong>
                  <em>browsing records&nbsp;</em>
                </strong>
                , click records, and URLs of potential risks, and Keep in
                accordance with relevant legal requirements.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>
                  (3) Authorization and consent of personal information of end
                  users
                </strong>
              </p>
              <p>
                You know very well that for the purpose of using the platform,
                you need us to collect, store, and process personal information
                from end users of your products.&nbsp;Therefore, you must commit
                to:
              </p>
              <p>
                1) You have obtained sufficient and necessary authorizations,
                consents and permits from end users to allow us to&nbsp;directly
                collect and use their personal information&nbsp;for the purpose
                of performing our services&nbsp;;
              </p>
              <p>
                2) You have obtained sufficient and necessary authorization,
                consent and permission from the end user to allow us and our
                partners to perform de-identification analysis and aggregate
                processing of the collected personal information of the end
                user;
              </p>
              <p>
                3) You have complied with and will continue to comply with
                applicable laws, regulations and regulatory requirements,
                including but not limited to formulating and publishing relevant
                policies on personal information protection and privacy
                protection;
              </p>
              <p>
                4) You have provided end users with an easy-to-operate selection
                mechanism to inform end users how and when they can exercise
                their options, and explain how and when they can modify or
                withdraw the options after exercising their options, so that
                users can choose to agree or not Agree to collect and use their
                personal information for commercial purposes.
              </p>
              <p>
                5)&nbsp;You have told the end user how to exercise the rights of
                the end user to you (how to access, correct their personal
                information, exercise the right to delete, change the scope of
                their authorization and consent, etc.).&nbsp;Your end users will
                not have any form of appeals, petitions, complaints, etc.
                against us because we process their personal information in
                accordance with this policy.&nbsp;If you ask us, you will be
                responsible for solving the problem for the end user.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>
                  If you violate the above commitments and cause your end users
                  to claim any form of claims or claims against us, or cause us
                  to be involved in legal or administrative procedures, you will
                  be responsible for a full settlement and compensation for any
                  form of damage we may suffer as a result loss.
                </strong>
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>
                  (4) Exceptions for obtaining authorization and consent
                </strong>
              </p>
              <p>
                According to laws and regulations, personal information
                collected and used in the following situations does not require
                the consent of the personal information subject:
              </p>
              <ol>
                <li>
                  Related to fulfilling obligations stipulated by laws and
                  regulations;
                </li>
                <li>
                  Directly related to national security and national defense
                  security;
                </li>
                <li>
                  Directly related to public safety, public health, and major
                  public interests;
                </li>
                <li>
                  Directly related to criminal investigation, prosecution,
                  trial, and execution of judgments;
                </li>
                <li>
                  It is related to protecting the life, property and other major
                  legal rights of the personal information subject or other
                  individuals, but it is difficult to obtain the authorization
                  and consent of the person;
                </li>
                <li>
                  The personal information involved is disclosed by the subject
                  of personal information to the public;
                </li>
                <li>
                  Necessary for signing and performing contracts according to
                  the requirements of the subject of personal information;
                </li>
                <li>
                  Collecting personal information from legally publicly
                  disclosed information, such as through legal news reports,
                  government information disclosure, etc.;
                </li>
                <li>
                  Maintaining what is necessary for the safe and stable
                  operation of our platform, such as discovering and disposing
                  of malfunctions of our platform products and/or services;
                </li>
                <li>Other circumstances stipulated by laws and regulations.</li>
              </ol>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>
                  2. How to use cookies and other similar tracking technologies
                </strong>
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>(1) What is Cookie</strong>
              </p>
              <p>
                A cookie is a small file stored in the personal information
                subject’s computer, mobile phone or other smart terminal device
                by the website server when the personal information subject logs
                on to the website or browses the network content. It usually
                contains identifiers, site names, and some numbers and
                characters.&nbsp;When the subject of personal information visits
                the corresponding website again, the website can identify the
                browser of the subject of personal information through
                cookies.&nbsp;Cookies may store user preferences and other
                information.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>(2) How to use cookies</strong>
              </p>
              <p>
                When personal information subjects use our website, we may
                collect the personal information subject’s device model,
                operating system, device identifier, and login IP address
                information through Cookies or similar technologies, and cache
                the personal information subject’s&nbsp;
                <strong>
                  <em>browsing information&nbsp;</em>
                </strong>
                and click information to view The network environment of the
                subject of personal information.&nbsp;Through cookies, we can
                identify the identity of the personal information subject when
                the personal information subject visits the website, and
                continuously optimize the user-friendliness of the website, and
                make adjustments to the website according to the needs of the
                personal information subject.&nbsp;The subject of personal
                information can also change the settings of the browser so that
                the browser does not accept cookies on our website, but this may
                affect the use of some functions of the website by the subject
                of personal information.
              </p>
              <p>&nbsp;</p>
              <p>
                On the SHOPASTRO website, with the help of cookies and other
                similar technologies, we can identify whether the personal
                information subject belongs to our user or end user each time
                the subject of personal information uses our products and/or
                services, without having to log in again on each page And
                verification.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>(3) How to manage cookies</strong>
              </p>
              <p>
                Personal information subjects can manage or delete certain types
                of tracking technologies according to their own
                preferences.&nbsp;Many web browsers have a "Do Not Track"
                function, which can issue a "Do Not Track" request to a website.
              </p>
              <p>&nbsp;</p>
              <p>
                In addition to the controls we provide, personal information
                subjects can also choose to enable or disable cookies in the
                Internet browser.&nbsp;Most Internet browsers also allow the
                subject of personal information to choose whether to disable all
                cookies or only third-party cookies.&nbsp;By default, most
                Internet browsers accept cookies, but this can be
                changed.&nbsp;For details, refer to the help menu in the
                Internet browser or the documentation provided with the device.
              </p>
              <p>&nbsp;</p>
              <p>
                The following link provides instructions on how to control
                cookies in all major browsers:
              </p>
              <p>
                -Google Chrome:&nbsp;
                <a href="https://translate.google.com/translate?hl=zh-CN&amp;prev=_t&amp;sl=zh-CN&amp;tl=en&amp;u=https://support.google.com/chrome/answer/95647%3Fhl%3Den">
                  https://support.google.com/chrome/answer/95647?hl=en
                </a>
              </p>
              <p>
                -IE:&nbsp;
                <a href="https://translate.google.com/translate?hl=zh-CN&amp;prev=_t&amp;sl=zh-CN&amp;tl=en&amp;u=https://support.microsoft.com/en-us/help/260971/description-of-cookies">
                  https://support.microsoft.com/en-us/help/260971/description-of-cookies
                </a>
              </p>
              <p>
                -Safari (desktop version):&nbsp;
                <a href="https://translate.google.com/translate?hl=zh-CN&amp;prev=_t&amp;sl=zh-CN&amp;tl=en&amp;u=https://support.apple.com/kb/PH5042%3Flocale%3Den_US">
                  https://support.apple.com/kb/PH5042?locale=en_US
                </a>
              </p>
              <p>
                -Safari (mobile version):&nbsp;
                <a href="https://translate.google.com/translate?hl=zh-CN&amp;prev=_t&amp;sl=zh-CN&amp;tl=en&amp;u=https://support.apple.com/en-us/HT201265">
                  https://support.apple.com/en-us/HT201265
                </a>
              </p>
              <p>
                -Firefox browser:&nbsp;
                <a href="https://translate.google.com/translate?hl=zh-CN&amp;prev=_t&amp;sl=zh-CN&amp;tl=en&amp;u=https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer%3Fredirectlocale%3Den-US%26redirectslug%3DCookies">
                  https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&amp;redirectslug=Cookies
                </a>
              </p>
              <p>
                -Opera:&nbsp;
                <a href="https://translate.google.com/translate?hl=zh-CN&amp;prev=_t&amp;sl=zh-CN&amp;tl=en&amp;u=https://www.opera.com/zh-cn/help">
                  https://www.opera.com/zh-cn/help
                </a>
              </p>
              <p>&nbsp;</p>
              <p>
                If the subject of personal information uses other browsers,
                please refer to the documentation provided by the browser
                manufacturer.
              </p>
              <p>&nbsp;</p>
              <p>
                On our website, the subject of personal information can delete
                the existing tracking technology by clearing the cache.
              </p>
              <p>&nbsp;</p>
              <p>
                When the personal information subject browses the page without
                logging in, in order to provide the corresponding service to the
                personal information subject, we will collect
                the&nbsp;cookie&nbsp;information&nbsp;necessary to realize the
                browsing function&nbsp;, but the&nbsp;cookie&nbsp;information
                will be deleted within one month.&nbsp;&nbsp;
              </p>
              <p>&nbsp;</p>
              <p>
                Personal information subjects are requested to be aware that if
                they refuse to use or clear existing tracking technology, they
                need to personally change user settings during each visit, and
                we may not be able to provide personal information subjects with
                a better experience, some services It may also not work
                properly.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>
                  3. How do we entrust the processing, sharing, transfer, and
                  public disclosure of personal information subjects'
                  information
                </strong>
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>(1) Entrusted processing</strong>
              </p>
              <p>
                In order to provide you with more complete and higher-quality
                products and services, certain functions may be provided by our
                technical service partners, and we may entrust partners
                (including technical service providers) to process&nbsp;certain
                personal information of&nbsp;personal information
                subjects&nbsp;.&nbsp;
                <strong>
                  (For example, when you use SHOPASTRO number when paying or
                  automatic debit function, or your end users to make payments
                  through outlets operating in SHOPASTRO you created, we may
                  entrust a third party payment companies handle some of your
                  personal information.)&nbsp;
                </strong>
                On For companies, organizations and individuals that we entrust
                to process personal information, we will sign strict
                confidentiality agreements with them to clarify data processing
                matters, processing periods, nature of processing, processing
                purposes, and responsibilities of both parties, etc., and
                require partners to only follow our requirements and this policy
                And any other relevant confidentiality and security measures to
                handle personal information.&nbsp;If you refuse our suppliers to
                collect personal information necessary to provide services when
                providing services, you or your end users may not be able to
                enjoy the services provided by that supplier while using our
                products and/or services.&nbsp;For example, we will hire service
                providers to assist us in completing real-name authentication.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>(2) Sharing</strong>
              </p>
              <p>
                Unless one or more of the following circumstances exist, we will
                not share personal information with any third-party company,
                organization or individual:
              </p>
              <ol>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Based on the request made by the
                  personal information subject, or the express authorization or
                  consent of the personal information subject obtained in
                  advance;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Relevant to our fulfillment of
                  obligations stipulated by laws and regulations;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Directly related to national security
                  and national defense security;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Directly related to public safety,
                  public health, and major public interests;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Directly related to criminal
                  investigation, prosecution, trial, and execution of judgments
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;In order to protect the life, property
                  and other major legal rights of the personal information
                  subject or other individuals, but it is difficult to obtain
                  the consent of the person;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Personal information that the subject
                  of personal information discloses to the public on his own
                  initiative;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Collecting personal information from
                  legally publicly disclosed information, such as through legal
                  news reports, government information disclosure, and other
                  channels.
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Sharing necessary information with our
                  affiliates and partners: We will only share personal
                  information for legal, legitimate, necessary, specific, and
                  clear purposes, and will only share individuals who are
                  necessary to provide services to you or your end users
                  information.&nbsp;We will not share personal information that
                  can identify the subject of personal information, unless
                  otherwise stipulated by laws and regulations.&nbsp;Different
                  from the partners under entrusted processing, the shared
                  partners are data controllers who will process personal
                  information after obtaining the consent of the personal
                  information subject in their own name.&nbsp;The partner may
                  have its own independent privacy policy and user service
                  agreement. We recommend that you read and abide by the user
                  agreement and privacy policy of the shared partner.&nbsp;The
                  following is the details of the information we share with
                  third parties:
                </li>
              </ol>
              <p>
                A. Sharing with affiliated companies: In order to facilitate us
                to provide you with platform products and/or services based on
                your SHOPASTRO account, recommend information that may be of
                interest to you, identify abnormal user accounts, and protect
                the personal and property safety of SHOPASTRO affiliates or
                other users or the public To avoid infringement, the personal
                information of you and your end users may be shared with our
                affiliated companies with the consent of you and your end
                users.&nbsp;We will only share necessary personal information
                and are bound by the purpose stated in this policy. If we
                share&nbsp;
                <strong>
                  <em>sensitive personal information&nbsp;</em>
                </strong>
                or the affiliate company changes the purpose of using and
                processing personal information, we will again seek
                authorization from you and your end users agree.
              </p>
              <p>B. Share with authorized partners:</p>
              <p>
                1) Authorized partners for advertising.&nbsp;Unless authorized
                by you, we will not share the personal information of your end
                users with partners that provide advertising services.&nbsp;We
                will provide these partners with information about the coverage
                and effectiveness of their advertising, but we will not provide
                personally identifiable information about your end users, or we
                will aggregate this information so that it will not identify
                individual end users.&nbsp;Such partners may combine the above
                information with other data they obtain legally for advertising
                or decision-making recommendations.
              </p>
              <p>
                2) Authorized partners of statistical analysis
                services.&nbsp;Unless authorized by you, we will not share the
                personal information of your end users with partners that
                provide statistical analysis services.&nbsp;We will provide
                aggregated information to these partners so that it does not
                identify individual end users.&nbsp;Such partners may combine
                the above information with other data they obtain legally for
                statistical analysis.
              </p>
              <p>
                3) Authorized partners of payment cooperation.&nbsp;When you
                need to use a credit card, debit card, or an online payment
                method supported by other platforms to use some of SHOPASTRO’s
                payment or subscription features for deduction, the deduction
                service will be through a&nbsp;partner bank or third-party
                payment company, etc. Provide it.&nbsp;We will provide these
                partners with the necessary information to achieve the deduction
                function, and will not provide additional personal information.
              </p>
              <p>
                4) Other suppliers, service providers and other
                partners.&nbsp;We send information to other suppliers, service
                providers, and other partners that support our business. This
                support includes providing technical infrastructure services,
                providing customer services, payment convenience, or conducting
                academic research and surveys.&nbsp;We will agree strict data
                protection measures with them, and order them to process
                personal information in accordance with our instructions, this
                policy and any other relevant confidentiality and security
                measures.
              </p>
              <p>&nbsp;</p>
              <p>
                You are reminded that this platform may contain functions
                provided by third parties or links to websites and services
                provided by third parties.&nbsp;The regulations and procedures
                described in this policy do not apply to third-party
                websites.&nbsp;Any information you provide to third-party
                websites or services will be directly provided to the operators
                of these services. Even if you access through this platform, you
                must comply with the privacy policies and user agreements (if
                any) applicable to the operators.&nbsp;We are not responsible
                for the content, personal information and security measures and
                policies of third-party websites or services.&nbsp;We recommend
                that you understand the privacy policy and user agreement of a
                third party before providing information.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>(3) Transfer</strong>
              </p>
              <p>
                In principle, we will not transfer the control of personal
                information to other companies, organizations or individuals,
                except in the following cases:
              </p>
              <ol>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Based on a request made by the subject
                  of personal information, or your express authorization or
                  consent obtained in advance;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Relevant to our fulfillment of
                  obligations stipulated by laws and regulations;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Directly related to national security
                  and national defense security;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Directly related to public safety,
                  public health, and major public interests;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Directly related to criminal
                  investigation, prosecution, trial, and execution of judgments;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;In order to protect the life, property
                  and other major legal rights of the personal information
                  subject or other individuals, but it is difficult to obtain
                  the authorization and consent of the person;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Personal information that the subject
                  of personal information discloses to the public on his own
                  initiative;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Collecting personal information from
                  legally publicly disclosed information, such as through legal
                  news reports, government information disclosure, etc.;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Transfer in the event of company
                  acquisition, merger, reorganization, bankruptcy, or change of
                  the operating entity.
                </li>
              </ol>
              <p>&nbsp;</p>
              <p>
                <strong>
                  Please be aware that if the transfer is really necessary for
                  the above reasons, we will inform you of the purpose, type,
                  and transferee of the information before the transfer (if
                  sensitive information is involved, we will also inform the
                  content of the sensitive information involved), and Transfer
                  after obtaining your consent, except as otherwise provided by
                  laws and regulations.&nbsp;After the change, the operating
                  entity will continue to perform the responsibilities and
                  obligations of the personal information controller; if the
                  company goes bankrupt or shuts down and there is no takeover
                  party, we will delete or anonymize your personal information.
                </strong>
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>(4) Public disclosure</strong>
              </p>
              <p>
                In principle, we will not release your personal information to
                the society or unspecified groups of people, except for those
                that should be disclosed based on an agreement with you or in
                accordance with laws and regulations.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>
                  4. How to enable you to have the right to manage personal
                  information
                </strong>
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>
                  (1) Access and correction of personal information
                </strong>
              </p>
              <p>
                You have the right to log in and access your SHOPASTRO account
                at any time to view your personal information.&nbsp;If you find
                that your personal information that we collect, store, use, and
                disclose is incorrect or incomplete, or under other
                circumstances as required by laws and regulations, you can log
                in [&nbsp;<em>Fill in the merchant site URL&nbsp;</em>] and
                enter the "Personal Center" "After correcting or supplementing
                your personal information.
              </p>
              <p>&nbsp;</p>
              <p>
                If you wish to access or correct your other personal
                information, or encounter difficulties in exercising the above
                rights, you can contact us through the methods described in
                Article 9 of this policy, and we will respond to your
                information in a timely manner after verifying your identity.
                Request, except as otherwise provided by laws and regulations or
                otherwise provided for in this policy.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>(2) Delete personal information</strong>
              </p>
              <p>
                In the following situations, you can contact customer service
                through the methods described in Article 9 of this policy to
                request us to delete your personal information, unless the data
                has been anonymized or otherwise provided by laws and
                regulations:
              </p>
              <ol>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;We have collected and used personal
                  information in violation of laws, administrative regulations,
                  or agreements with you;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;If we violate laws and regulations or
                  violate the agreement with you to share or transfer personal
                  information to a third party, we will immediately stop sharing
                  or transfer, and notify the third party to delete it in time;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;If we violate laws and regulations or
                  violate the agreement with you to share or transfer personal
                  information to a third party, we will immediately stop sharing
                  or transfer, and notify the third party to delete it in time;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;You terminate the use of the products
                  and/or services of this platform by means of cancellation,
                  etc.;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Other circumstances stipulated by laws
                  and regulations.
                </li>
              </ol>
              <p>&nbsp;</p>
              <p>
                <strong>
                  Before deleting relevant information, we may require you to
                  verify your identity to protect your account
                  security.&nbsp;When we decide to respond to your deletion
                  request, we will delete your information from SHOPASTRO
                  products and/or servers as soon as possible.&nbsp;However, due
                  to the requirements of the regulatory authorities to fight
                  crime and maintain national security, we will keep your
                  communication information and transaction records within the
                  time limit permitted by law, but we will not conduct any
                  use.&nbsp;Please be aware that we may not delete the
                  information you need to delete from the backup system
                  immediately, but will delete it when the backup system is
                  updated.
                </strong>
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>(3) Cancel account</strong>
              </p>
              <p>
                Unless otherwise provided by laws and regulations or otherwise
                agreed in this policy, you can contact customer service through
                the methods described in Article 9 of this policy to cancel your
                SHOPASTRO account.
              </p>
              <p>&nbsp;</p>
              <p>
                Please understand and be aware that canceling your account on
                this platform will cause you to permanently lose access to the
                account and the data in the account.&nbsp;We will provide you
                with account cancellation services after verifying your identity
                and negotiating with you to process the assets in your
                account.&nbsp;In order to provide you with a more convenient way
                to log out, we will continue to optimize our products in the
                future and inform you through page announcements.&nbsp;After you
                cancel your account, unless you need to retain personal
                information in accordance with laws and regulations, we will
                delete or anonymize your personal information in a timely
                manner.
              </p>
              <p>&nbsp;</p>
              <p>
                Your cancellation of your account is irreversible. Once your
                account is cancelled, we will no longer collect your personal
                information and will no longer provide you with our products
                and/or services. Therefore, we recommend that you choose to
                cancel your account carefully.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>
                  (4) Constrain the automatic decision-making of the information
                  system
                </strong>
              </p>
              <p>
                In some business functions of this platform, we may make
                decisions based on non-manual automatic decision-making
                mechanisms including information systems and algorithms.&nbsp;If
                these decisions significantly affect your legal rights, you have
                the right to request an explanation from us, and you can contact
                us through the methods provided in Article 9 of this policy.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>(5) Responding to the request</strong>
              </p>
              <p>
                In order to realize the user rights described in this article,
                or if you have any questions, complaints, comments or
                suggestions, you can contact us through the contact information
                provided in Article 9 of this policy.&nbsp;To ensure security,
                we may ask to verify the identity of your user before processing
                your request.&nbsp;For your request, in principle, your user
                identity will be verified and a reply will be made within 15
                working days after receiving your request.
              </p>
              <p>&nbsp;</p>
              <p>
                For your reasonable request, we do not charge fees in
                principle.&nbsp;For repeated requests within a certain period of
                time, we will charge a certain cost depending on the situation;
                for requests that require too many technical means (for example,
                the need to develop a new system or fundamentally change the
                current practice) or other significant difficulties, we Will
                provide you with an alternative method.
              </p>
              <p>&nbsp;</p>
              <p>
                We will reject your request under the following circumstances:
              </p>
              <ol>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Relevant to fulfilling the obligations
                  stipulated by laws and regulations;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Directly related to national security
                  and national defense security;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Directly related to public safety,
                  public health, and major public interests;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Directly related to criminal
                  investigation, prosecution, trial and execution of judgments;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;There is sufficient evidence to show
                  that the user has subjective malice or abuse of rights;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;To protect the life, property and
                  other major legal rights of users or other individuals, but it
                  is difficult to obtain the authorization and consent of the
                  person;
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;Responding to the user's request will
                  cause serious damage to the legitimate rights and interests of
                  the user or other individuals or organizations;
                </li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;Involving trade secrets.</li>
              </ol>
              <p>&nbsp;</p>
              <p>
                Please be aware that we recommend that you respond directly to
                requests made by end users (not direct customers of this
                platform) who use the products and/or services of this
                platform.&nbsp;Unless we receive your request for assistance, we
                will forward the request received by your end user to you or ask
                the end user to directly find you for help.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>
                  5. How do we save and protect personal information
                </strong>
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>(1) Preservation of personal information</strong>
              </p>
              <p>
                <strong>1) Shelf life</strong>
              </p>
              <p>
                During your use of SHOPASTRO products and/or services, we will
                continue to store personal information about you and your end
                users for you.&nbsp;We promise that, unless otherwise required
                by laws and regulations, our storage time for you and your
                terminal users' personal information is limited to the shortest
                time necessary to achieve the purpose of authorized use by you
                and your terminal users, unless otherwise stipulated by laws and
                regulations or otherwise authorized by the user. .
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                If you cancel your account, voluntarily delete the above
                information, or we stop operations due to poor management or
                other reasons, we will stop collecting your personal information
                in accordance with laws and regulations, and delete the
                collected personal information or make it anonymous化处理。
                Treatment.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>2) Conservation area</strong>
              </p>
              <p>
                In principle, we will store personal information collected and
                generated during operations in China, and will not transmit it
                across borders.&nbsp;Please be aware that in order to assist
                third-party service providers to complete their services, we may
                transfer your personal information to third-party service
                providers located overseas.&nbsp;In this case, we will ensure
                that your personal information is sufficiently and equally
                protected in China, and implement de-identification and other
                measures before cross-border data transmission.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>(2) Protection of personal information</strong>
              </p>
              <p>
                We attach great importance to the safety of your personal
                information. For this reason, we have adopted multi-level
                protection measures such as safety technical measures in line
                with industry standards and supporting organizational structures
                and management systems to prevent your personal information from
                being leaked, damaged, or misused to the greatest extent
                possible , Unauthorized access, unauthorized disclosure or
                modification, including:
              </p>
              <p>
                <strong>1)&nbsp;Data security technical measures&nbsp;</strong>
              </p>
              <p>
                In order to ensure information security, we strive to take
                various reasonable security technical measures to protect
                personal information, so that the personal information of you
                and your end users will not be leaked, destroyed or
                lost.&nbsp;We use encrypted transmission technologies such as
                SSL to protect the safety of the data during its transmission,
                and use proper protection mechanisms to prevent malicious
                attacks on the data.&nbsp;We adopt an encrypted storage and data
                authority control mechanism for personal information to prevent
                unauthorized access, public disclosure, use, modification,
                man-made or accidental damage or loss of personal information of
                you and your end users.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>
                  2) Data security organization and management measures
                </strong>
              </p>
              <p>
                In accordance with the requirements of relevant laws and
                regulations, we have appointed a person in charge of personal
                information protection and a personal information protection
                agency.&nbsp;We have also established a related internal control
                management process, based on the principle of minimum
                authorization, strictly set the information access authority for
                the staff who may be exposed to the personal information of you
                and your end users, and control the scope of personal
                information knowledge.
              </p>
              <p>&nbsp;</p>
              <p>
                We have established an internal standard system for the safe use
                of data, and have also adopted strict management of employees or
                outsourced personnel who may have access to the information of
                you and your end users, including but not limited to adopting
                different authority controls according to different positions,
                and signing with them Confidentiality agreement, monitoring
                their operations and other measures.
              </p>
              <p>&nbsp;</p>
              <p>
                We organize employees to participate in security and privacy
                protection related trainings and require them to complete the
                required assessments to strengthen employees' awareness of the
                importance of protecting personal information.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>3) Guarantee of terms of cooperation agreement</strong>
              </p>
              <p>
                Before we collect your personal information indirectly from a
                third party, we will expressly require the third party to
                collect and process&nbsp;the personal information
                of&nbsp;you&nbsp;and your end users&nbsp;in written form (such
                as cooperation agreement, letter of commitment) after obtaining
                your express consent&nbsp;. And require the third party to make
                a commitment in the form of a written agreement on the legality
                and compliance of the source of personal information. If the
                third party violates the behavior, we will explicitly require
                the other party to bear the corresponding legal responsibility.
              </p>
              <p>&nbsp;</p>
              <p>
                Before we share&nbsp;the personal information
                of&nbsp;you&nbsp;and/or your end users&nbsp;with our partners,
                we will strictly require our partners to undertake information
                protection obligations and responsibilities.&nbsp;To this end,
                we will require eco-partners to sign a&nbsp;
                <strong>
                  data processing agreement or set out the terms of data
                  protection in the cooperation agreement signed by both parties
                  before cooperation&nbsp;
                </strong>
                .&nbsp;The agreement strictly stipulates that partners’
                confidentiality obligations for user information, including the
                storage, use and circulation of information, should meet our
                management and control requirements and accept our review,
                supervision and audit. Once there is any violation, we will
                require the other party to bear the corresponding legal
                liability.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>4) Security incident handling</strong>
              </p>
              <p>
                In the unfortunate event of a personal information security
                incident, we will immediately activate an emergency plan, take
                remedial measures, record the content of the incident, and
                report it in a timely manner in accordance with applicable laws
                and regulations.&nbsp;If it may&nbsp;cause serious damage to the
                legitimate rights and interests of&nbsp;you&nbsp;and/or your end
                users&nbsp;, such as the disclosure of sensitive personal
                information, we will inform you of the basic situation of the
                security incident and its possible impact, and what we have
                taken or will take The disposal measures, the suggestions you
                can choose to prevent and reduce risks,&nbsp;the remedial
                measures&nbsp;we provide for you&nbsp;and/or your end
                users&nbsp;, and the contact information of the person in charge
                of personal information protection and the personal information
                protection agency.&nbsp;We will promptly inform you of the above
                incidents by email, letter, telephone or push notification. If
                it is difficult to inform you one by one, we will adopt a
                reasonable and effective way to issue a warning notice.
              </p>
              <p>&nbsp;</p>
              <p>
                Please know and understand that the Internet is not an
                absolutely secure environment. We strongly recommend that you
                use a secure method and use a complex password to help us ensure
                the security of your account.&nbsp;If you find that your
                personal information is leaked, especially your account or
                password, please contact us immediately according to the contact
                information provided in Article 9 of this policy so that we can
                take corresponding measures to protect your information.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>
                  6. How to protect the personal information of minors
                </strong>
              </p>
              <p>
                This platform only provides products and/or services to users
                who are over 18 years old (inclusive).&nbsp;We will not
                knowingly collect personal information of minors.&nbsp;If we
                accidentally collect information about minors, we will delete it
                as soon as we know it.&nbsp;If you believe that we may
                improperly hold information about minors, please contact us in
                accordance with the methods described in Article 9 of this
                policy.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>7. How to update this policy</strong>
              </p>
              <p>
                We may revise the terms of this policy in due course, and this
                revision forms part of this policy.&nbsp;If such amendments
                result in a substantial reduction of your rights under this
                policy, we will notify you through a prominent position on the
                homepage or send you an email or other means before the
                amendment takes effect.&nbsp;In this case, if you do not agree
                to this policy, or object to the modification or update of this
                policy, you can choose to stop using our products and/or
                services or cancel your account.&nbsp;However, please be aware
                that the behavior and activities before your account is
                cancelled and before you stop using the service are still
                subject to this policy.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>
                  If it involves major and substantive changes, we will notify
                  you in a significant way based on specific circumstances.
                </strong>
              </p>
              <p>
                <strong>
                  Significant and substantial changes include but are not
                  limited to the following situations:
                </strong>
              </p>
              <p>
                <strong>1)</strong>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>
                  Our service model has undergone major changes.&nbsp;Such as
                  the purpose of processing personal information, the type of
                  personal information processed, the way of using personal
                  information, etc.;
                </strong>
              </p>
              <p>
                <strong>2)</strong>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>
                  Your right to participate in the processing of personal
                  information and how to exercise it has undergone major
                  changes;
                </strong>
              </p>
              <p>
                <strong>3)</strong>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>
                  Significant changes have taken place in our ownership
                  structure and organizational structure.&nbsp;Such as changes
                  in owners caused by business adjustments, bankruptcy mergers,
                  etc.;
                </strong>
              </p>
              <p>
                <strong>4)</strong>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>
                  Changes in the main objects of personal information sharing,
                  transfer or public disclosure;
                </strong>
              </p>
              <p>
                <strong>5)</strong>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>
                  When our department responsible for handling personal
                  information security, contact information and complaint
                  channels change;
                </strong>
              </p>
              <p>
                <strong>6)</strong>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>
                  When the personal information security impact assessment
                  report shows that there is a high risk.
                </strong>
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p>
                <strong>8. Jurisdiction and application of law</strong>
              </p>
              <p>
                <strong>
                  The establishment, effectiveness, performance, interpretation
                  and dispute resolution of this privacy policy shall be
                  governed by Chinese laws, and the application of its conflict
                  of laws and regulations shall be clearly excluded.
                </strong>
              </p>
              <p>
                <strong>
                  If there is any dispute or dispute between you and us, you
                  should first settle it through friendly negotiation; if the
                  negotiation fails, you agree to submit the dispute or dispute
                  to the Hangzhou Internet Court for settlement through
                  litigation.
                </strong>
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>9. How to contact us</strong>
              </p>
              <p>
                If you have any questions, comments or suggestions about the
                content of this policy, you can contact us in the following
                ways: 1) SHOPASTRO's customer service hotline: [&nbsp;
                <em>fill in the customer service phone number&nbsp;</em>]; 2)
                Personal information protection full-time department email:
                [fill in information security Departmental mailbox]; or 3) Mail
                the letter to: Common office address:&nbsp;Room 1701, Building
                5, Times Future City, Cangqian Street, Yuhang District, Hangzhou
                City&nbsp;,&nbsp;Zhejiang
                Province.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>10. Keyword definition</strong>
              </p>
              <p>
                <strong>You:&nbsp;</strong>Refers to seller users and/or their
                employees and/or other persons authorized to operate this
                platform who have registered and used SHOPASTRO.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>Personal information:&nbsp;</strong>refers to various
                information recorded electronically or in other ways that can
                identify a specific natural person alone or in combination with
                other information or reflect the activities of a specific
                natural person.&nbsp;The personal information involved in this
                policy includes name, date of birth,&nbsp;
                <a id="_Hlk74841276"></a>ID number, personal biometric
                information&nbsp;, address, communication contact information,
                communication records and content, passwords,&nbsp;
                <a id="_Hlk74841337"></a>property information,&nbsp;transaction
                information, etc.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>
                  <em>
                    Personal sensitive information: refers to personal
                    information that, once leaked, illegally provided or abused,
                    may endanger personal and property safety, and easily lead
                    to personal reputation, physical and mental health damage,
                    or discriminatory treatment, including ID number, personal
                    biometric information, bank account , Property information,
                    credit information, whereabouts, health and physiological
                    information, transaction information.
                  </em>
                </strong>
              </p>
              <p>
                <strong>
                  <em>&nbsp;</em>
                </strong>
              </p>
              <p>
                <strong>De-identification:&nbsp;</strong>refers to the process
                of technical processing of personal information to make it
                impossible to identify or associate you without additional
                information.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>Deletion:&nbsp;</strong>Refers to the act of removing
                personal information from the system involved in the realization
                of daily business functions, so that it can be kept in a state
                where it cannot be retrieved or accessed.&nbsp;
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>Anonymization:&nbsp;</strong>refers to the process of
                technical processing of personal information so that you cannot
                be identified or associated, and the processed information
                cannot be restored.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>Mainland China or Mainland China:&nbsp;</strong>refers
                to the Mainland of the People's Republic of China (for the
                purpose of this policy only, excluding Hong Kong Special
                Administrative Region, Macau Special Administrative Region and
                Taiwan Region).
              </p>
              <p>&nbsp;</p>
              <p>
                Note：This Policy is prepared Chinese and translations in other
                languages are for reference purpose only. If there is any
                discrepancy between the Chinese version and any translation in
                other language, the Chinese version shall prevail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
