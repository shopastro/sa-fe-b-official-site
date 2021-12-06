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
                <strong>User Agreement</strong>
              </p>
              <p>Release Date: 6th of Dec. 2021 </p>
              <p>Effective date: 6th of Dec. 2021</p>
              <p>
                <strong>about us</strong>
              </p>
              <p>
                SHOPASTRO product and/or service platform (hereinafter referred
                to as“SHOPASTRO”or“Platform”) is owned and operated by ShopAstro
                (Hangzhou) Network Technology Co., Ltd. (registered address:
                Room 1701&nbsp;Times Future City Building 5, Cangqian Street,
                Yuhang District, Hangzhou City, Zhejiang Province) and its
                affiliates (hereinafter collectively referred to as "we"),
                providing online shops to seller users (hereinafter referred to
                as "users", "you" or "sellers")&nbsp;through SHOPASTRO website
                www.shopastro.com A SaaS platform
                with complete solutions for site building, traffic, payment and
                logistics.&nbsp;&nbsp;
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>1. Scope and Effectiveness of the Agreement</strong>
              </p>
              <p>
                1)&nbsp; In it you register as a SHOPASTRO user&nbsp;before,
                go&nbsp;read the link and read and fully understand this
                Agreement, the specific terms and&nbsp;articles "SHOPASTRO
                Privacy Policy"&nbsp;section, in particular, exempt or mitigate
                the liabilities, which are of vital interest to your article
                (especially It is the terms that are bolded and underlined to
                remind users to pay attention), applicable law and dispute
                resolution terms, etc.
              </p>
              <p>&nbsp;</p>
              <p>
                2)&nbsp; "SHOPASTRO Privacy Policy" and&nbsp;other policy
                documents, operating rules, SaaS website building service sales
                contracts and other documents are all valid components of this
                agreement, and are inseparable from this agreement and have the
                same legal effect (hereinafter collectively referred to as
                "service agreement" or "this agreement" ").&nbsp;This agreement
                is an agreement between you and us regarding your use of the
                information, software, products and services provided by
                SHOPASTRO as a user.
              </p>
              <p>&nbsp;</p>
              <p>
                3)&nbsp; In the process of reading this agreement, if you have
                any questions or feedback, you can contact us through
                SHOPASTRO's customer service email: shopastro@shopastro-inc.com.&nbsp;When you
                fill in the information as prompted on the registration page,
                complete all the registration procedures, and read and check to
                agree to this agreement, it means that you accept all the
                content of this agreement and become a SHOPASTRO user.&nbsp;If
                you do not agree to this service agreement or any of its terms,
                you should immediately stop the registration process or use this
                platform.
              </p>
              <p>&nbsp;</p>
              <p>
                4)&nbsp; We will update this agreement from time to time in
                accordance with the requirements of relevant laws and
                regulations or business development needs, and will publish it
                on this platform at the same time. The revised content will take
                effect after the publicity period and replace the original
                agreement.&nbsp;Therefore, we recommend that you regularly check
                the content of this platform's service agreement and related
                notices to learn about the latest rules.&nbsp;If you do not
                agree with the change, you have the right to contact us for
                feedback before the effective date of the change.&nbsp;If the
                feedback is adopted, we will adjust the changes as
                appropriate.&nbsp;If you still disagree with the changes that
                have taken effect, you should stop using the SHOPASTRO service
                from the date when the changes are determined to take effect,
                and the changes will not have any effect on you; if you continue
                to use the platform services after the changes take effect, It
                is deemed that you agree and accept the changes that have taken
                effect.
              </p>
              <p>&nbsp;</p>
              <p>
                5.) You are responsible for preparing for your visit to
                SHOPASTRO.&nbsp;You are also responsible for ensuring that
                everyone who accesses SHOPASTRO through your mobile device and
                internet connection understands and abides by these terms and
                conditions.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>2. Account registration and use</strong>
              </p>
              <p>
                1)&nbsp; SHOPASTRO's services are only provided to entities that
                can conclude contracts with us in accordance with the law,
                including natural persons, legal persons or other organizations
                with full civil rights and capacity for conduct.&nbsp;To use
                this platform to place an order service, you should have the
                right and capacity to purchase related goods, including
                obtaining the full authorization of a legal person or other
                organization, and the right to register and use SHOPASTRO on
                behalf of the relevant legal person or other organization.
              </p>
              <p>&nbsp;</p>
              <p>
                2)&nbsp; We do not provide SHOPASTRO services to users under the
                age of 18.&nbsp;If you are under 18 years old when you use it,
                please stop using this service immediately.
              </p>
              <p>&nbsp;</p>
              <p>
                3)&nbsp; You agree and understand that you register and log in
                to SHOPASTRO through email plus password and mobile phone number
                plus verification code. SHOPASTRO will use this to identify your
                account information. For the collection of relevant personal
                information, please refer to the&nbsp;“SHOPASTRO Privacy
                Policy”&nbsp;.&nbsp;You declare and warrant that when you
                register a SHOPASTRO account to become a user, all the
                registration information you submit is accurate and true, and
                you should not use other people's information or false
                information to register your account.&nbsp;If the information
                you used to register your account changes, you must update your
                account information in a timely manner and maintain its accuracy
                at any time.
              </p>
              <p>&nbsp;</p>
              <p>
                4) SHOPASTRO only allows each user to register and use one
                SHOPASTRO master account.&nbsp;If there is evidence or the
                platform judges that users have improper registration or
                improper use of multiple SHOPASTRO main accounts according to
                the rules, we can take measures such as freezing, closing
                accounts, suspending or refusing to provide services, and
                causing losses to SHOPASTRO and related parties. Should be
                liable for compensation.
              </p>
              <p>&nbsp;</p>
              <p>
                5) Users should abide by laws and regulations, and properly use
                and keep SHOPASTRO account numbers and passwords.&nbsp;The user
                shall not give, borrow, rent, transfer, sell or otherwise
                dispose of or authorize the SHOPASTRO account to any third party
                without the consent of SHOPASTRO. Therefore, the loss caused by
                the leakage of user account and password information shall be
                caused by the user. To bear.
              </p>
              <p>&nbsp;</p>
              <p>
                6)&nbsp; When the user discovers that the SHOPASTRO account is
                used by a third party without his authorization or there are
                other account security issues, he should immediately and
                effectively notify SHOPASTRO to request the suspension of the
                account’s services.&nbsp;The user understands that it takes
                reasonable time for SHOPASTRO to take action on any request of
                the user, and that the action taken by SHOPASTRO in response to
                the user's request may not be able to avoid or prevent the
                formation or expansion of the consequences of the
                infringement.&nbsp;Except for SHOPASTRO's statutory fault,
                SHOPASTRO shall not be liable for the above-mentioned matters.
              </p>
              <p>&nbsp;</p>
              <p>
                7)&nbsp; After the registration is successful, you can also stop
                using SHOPASTRO at any time and apply to cancel your account to
                terminate the user qualification.&nbsp;If you need to cancel
                your SHOPASTRO account, you can apply to cancel your account
                through [Customer Service Staff].&nbsp;After canceling the user
                account, we will stop providing you with all products and
                services, and delete your personal information in accordance
                with the law, except as otherwise provided by laws and
                regulations.
              </p>
              <p>&nbsp;</p>
              <p>
                8)&nbsp; You are responsible for all the results of actions
                under your account (including but not limited to online signing
                of various agreements, publishing information, purchasing
                services, and disclosing information, etc.).
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>3. User Code of Conduct</strong>
              </p>
              <p>
                1)&nbsp; When you use SHOPASTRO, you should abide by the service
                agreement and must not have the following behaviors:
              </p>
              <p>
                1.1&nbsp;Publish any content that violates laws and regulations
                or is inappropriate to the service category or section on
                SHOPASTRO;
              </p>
              <p>
                1.2&nbsp;Violate laws, regulations, services and rules, and
                damage the legitimate rights and interests of other third
                parties;
              </p>
              <p>
                1.3&nbsp;Use our services when under the age of 18 and no
                guardian is present;
              </p>
              <p>
                1.4&nbsp;Manipulate the price of any goods or interfere with
                other users' lists;
              </p>
              <p>
                1.5&nbsp;Circumvent or manipulate our fee structure, invoicing
                process, or default on any fees from SHOPASTRO;
              </p>
              <p>
                1.6&nbsp;Publish false, inaccurate, misleading, defamatory
                content or personal information related to other users;
              </p>
              <p>1.7&nbsp;Publish or spread spam or MLM content;</p>
              <p>
                1.8&nbsp;Any computer virus, worm or any other technology that
                may damage the legal rights of SHOPASTRO or other users through
                SHOPASTRO release or spread;
              </p>
              <p>
                1.9&nbsp;Defame, abuse, harass, stalk, threaten or otherwise
                violate the legal rights of others (such as the right to
                privacy);
              </p>
              <p>
                1.10&nbsp;Restrict or prohibit any other users from using
                SHOPASTRO services;
              </p>
              <p>
                1.11&nbsp;Violate the rules of conduct or other guidelines that
                may apply to any particular service;
              </p>
              <p>
                1.12&nbsp;Copy, modify and/or disseminate the contents of this
                website and its subdomains, including copyright works and
                trademarks of this website;
              </p>
              <p>
                1.13&nbsp;Obtain or otherwise collect any user data or
                information (including but not limited to personal information)
                without the user's consent;
              </p>
              <p>1.14&nbsp;Other violations of laws and regulations.</p>
              <p>&nbsp;</p>
              <p>
                2)&nbsp; Your comments on any and all data, text, information,
                user names, graphics, images, photos, personal data, audios,
                videos, projects and links (hereinafter referred to as "uploaded
                content") and information about you submitted, posted and
                displayed on SHOPASTRO Responsible for all actions and
                activities of SHOPASTRO.&nbsp;When you upload content and use
                SHOPAASTRO, you must not have the following behaviors:
              </p>
              <p>
                2.1&nbsp;Provide false, inaccurate or misleading information;
              </p>
              <p>
                2.2&nbsp;Fraud or transactions involving illegal, counterfeit or
                stolen items, infringement of the copyright, patent, trademark,
                trade secret or other intellectual property rights and privacy
                rights of any third party;
              </p>
              <p>
                2.3&nbsp;Violate this agreement, any website policies and other
                relevant laws and regulations (including but not limited to
                import and export control, anti-discrimination or false
                advertising laws);
              </p>
              <p>
                2.4&nbsp;Contain or transmit any code of destructive nature, or
                may damage, interfere, destroy, secretly obtain or collect any
                computer system, data or personal information;
              </p>
              <p>
                2.5&nbsp;Modifying, adapting or attacking SHOPASTRO or by
                modifying or creating other websites or mobile device
                applications, and implying that the website or application is
                related to SHOPASTRO;
              </p>
              <p>
                2.6&nbsp;Cause SHOPASTRO’s liability or cause SHOPASTRO to lose
                (in whole or in part) its suppliers; directly or indirectly
                link, reference or contain goods or services prohibited by this
                agreement; upload anything on SHOPASTRO that may cause us to
                violate any applicable laws, regulations, ordinances or
                Regulations or content that violates these terms and conditions.
              </p>
              <p>&nbsp;</p>
              <p>
                3)&nbsp; We have the right to delete any content posted by any
                user on SHOPASTRO that is non-compliant or violating the
                above-mentioned SHOPAASTRO rules, or any content that is not
                suitable for posting on SHOPASTRO.
              </p>
              <p>&nbsp;</p>
              <p>
                4)&nbsp; When users engage in illegal activities or other
                activities that violate the SHOPASTRO policy, we may take
                measures to restrict, suspend or terminate our services and user
                accounts, prohibit access to SHOPASTRO and user content, delete
                hosted content, and take corresponding technical and legal
                measures to limit violations user.&nbsp;In addition, we will
                suspend or terminate user accounts suspected of repeated
                infringements of the intellectual property rights of third
                parties under appropriate circumstances.&nbsp;We also reserve
                the right to cancel unverified accounts or accounts that have
                been inactive for a long time.
              </p>
              <p>&nbsp;</p>
              <p>
                5)&nbsp; If the user fails to comply with the above provisions,
                we have the right to determine whether the user’s behavior is in
                compliance with the service agreement, and depending on the
                circumstances of the behavior, the right to restrict, suspend or
                terminate the provision of services to the user, cancel
                transaction orders and technical support measures, or even
                suspend or Log out of the user account.&nbsp;At the same time,
                we reserve the right to report to the relevant departments, and
                the user shall bear all the legal responsibilities caused
                thereby.&nbsp;If SHOPASTRO causes losses due to user behavior,
                we have the right to request users to stop the damage,
                apologize, compensate for the loss, and assume responsibility
                for breach of contract.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>4. Service Content</strong>
              </p>
              <p>
                1)&nbsp; We will provide you with a complete solution for shop
                building, traffic, payment and logistics through the SHOPASTRO
                website.&nbsp;After registering an account, you can&nbsp;choose
                the service you need&nbsp;on the SHOPASTRO website www.shopastro.com.
              </p>
              <p>&nbsp;</p>
              <p>
                2)&nbsp; In the site building service, you can set the shop
                interface by yourself through functions such as product topping,
                product recommendation, product ADD TO CART, color palette, size
                chart, etc.&nbsp;You understand and agree that when you use the
                SHOPASTRO website building service, we may collect your personal
                information, as well as the personal information of end users.
                For specific collection and usage rules, please refer to
                the&nbsp;relevant provisions of the&nbsp;SHOPASTRO Privacy
                Policy&nbsp;.&nbsp;
              </p>
              <p>&nbsp;</p>
              <p>
                3)&nbsp; We will provide different paid or free subscription
                content or tools from time to time.&nbsp;Fees may vary depending
                on the content or tools of the subscription.&nbsp;If you fail to
                pay the full subscription fee on time, we reserve the right to
                suspend your account.
              </p>
              <p>&nbsp;</p>
              <p>
                4)&nbsp; You understand and agree to pay related expenses in
                accordance with the plan, including but not limited to
                maintenance fees charged according to a certain percentage of
                your online store's monthly income, and fees for purchasing or
                using SHOPASTRO products or services provided from time to
                time.&nbsp;We will send charge notices or bills through the
                management panel, email or other methods authorized by you.
              </p>
              <p>&nbsp;</p>
              <p>
                5)&nbsp; You understand and accept that your subscription
                service will automatically renew after expiration, and you
                authorize us (without prior notice) to charge the applicable
                subscription fee at that time.&nbsp;You can&nbsp;cancel the
                subscription service of your account&nbsp;at any time through
                the management panel or email shopastro@shopastro-inc.com.
              </p>
              <p>&nbsp;</p>
              <p>
                6)&nbsp; When either party terminates SHOPASTRO service for any
                reason:
              </p>
              <p>
                6.1&nbsp;We will stop providing you with SHOPASTRO services and
                you will not be able to access your account;
              </p>
              <p>
                6.2&nbsp;Unless otherwise agreed between us and you, you will
                not be entitled to a proportional or other refund of any fees;
                before the effective date of the suspension of service, any
                outstanding balance due to your use of SHOPASTRO will expire
                immediately Payable, except as otherwise provided by laws and
                regulations;
              </p>
              <p>6.3&nbsp;Your online store will go offline.</p>
              <p>&nbsp;</p>
              <p>
                7)&nbsp; If you purchase a domain name through SHOPASTRO, your
                domain name will no longer be automatically renewed after you
                cancel your account or the situation in Article 4, paragraph 4
                of this agreement occurs.&nbsp;After you cancel your account,
                you will be solely responsible for handling all matters related
                to your domain name with the domain name provider.
              </p>
              <p>&nbsp;</p>
              <p>
                8)&nbsp; If you violate any of the above terms and conditions,
                we reserve the right to terminate your SHOPASTRO user
                qualification immediately, and will not notify you 90 days in
                advance, and you will not be able to continue to visit this
                website and use the SHOPASTRO service.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>5. Statement</strong>
              </p>
              <p>
                1)&nbsp; You understand and acknowledge that SHOPASTRO only
                assists in the establishment of the website and does not
                participate in actual transactions between end consumers and
                buyers.&nbsp;We cannot control and cannot guarantee the quality,
                safety or legality of the products advertised by the seller, nor
                can we guarantee the seller’s delivery ability and the buyer’s
                ability to pay, as well as the authenticity or accuracy of the
                seller’s statements regarding the products sold on SHOPASTRO
                sex.&nbsp;We cannot guarantee that the buyer and seller will
                complete the transaction of the product or service after the
                communication or statement of intention to reach the transaction
                through SHOPASTRO.
              </p>
              <p>&nbsp;</p>
              <p>
                2)&nbsp; You must not claim to us any liability for the
                consequences caused by your illegal use of SHOPASTRO.
              </p>
              <p>&nbsp;</p>
              <p>
                3)&nbsp; We do not transfer or guarantee the transfer of
                ownership of products from seller to buyer.&nbsp;Unless the
                buyer and seller agree otherwise, the buyer becomes the legal
                owner of the product after actually receiving the product from
                the seller.&nbsp;In addition, the operation of SHOPASTRO may be
                interfered by many factors beyond our control. Therefore, to the
                extent permitted by law, we exclude all implied warranties,
                terms and conditions.&nbsp;We are not responsible for any loss
                of money, goodwill or reputation, or any special, indirect or
                corresponding damages caused by your use of our
                platform.&nbsp;The risks arising from the use of SHOPASTRO are
                borne by you.
              </p>
              <p>&nbsp;</p>
              <p>
                4)&nbsp; If there is a dispute between the buyer and the seller,
                you understand and agree that you will not claim compensation
                from us (including our employees, subcontractors and all related
                parties) or demand in any way to bear the responsibilities
                related to such disputes.
              </p>
              <p>&nbsp;</p>
              <p>
                5)&nbsp; If you have disputes with other users in the process of
                using SHOPASTRO, you or any other party have the right to choose
                the following ways to resolve:
              </p>
              <p>
                5.1&nbsp;Negotiate independently with the opposite party to the
                dispute;
              </p>
              <p>
                5.2&nbsp;Request mediation by relevant mediation organizations;
              </p>
              <p>
                5.3&nbsp;Lodge a complaint with the relevant administrative
                department;
              </p>
              <p>
                5.4&nbsp;Refer to an arbitration institution for arbitration in
                accordance with the arbitration agreement (if any) reached with
                the opposite party to the dispute;
              </p>
              <p>5.5&nbsp;File a lawsuit in the people's court.</p>
              <p>&nbsp;</p>
              <p>
                6)&nbsp; We cannot control the information provided by other
                users through our system.&nbsp;Please carefully browse and
                carefully read and understand the information published by other
                users on SHOPASTRO, and you should pay attention to and bear the
                risks caused by the authenticity of the information.&nbsp;By
                using this platform, you agree to accept these risks.&nbsp;We
                are not responsible for the losses caused by your negligence in
                using SHOPASTRO.
              </p>
              <p>&nbsp;</p>
              <p>
                7)&nbsp; Certain services provided through SHOPASTRO may be
                provided by third parties.&nbsp;By using any product, service or
                function or the platform itself, you acknowledge and agree that
                we can share this information and data with the third
                party.&nbsp;For details, please refer to&nbsp;"SHOPASTRO Privacy
                Policy"&nbsp;.
              </p>
              <p>&nbsp;</p>
              <p>
                8)&nbsp; We will update SHOPASTRO products and services from
                time to time, and update the platform content at any
                time.&nbsp;We will make reasonable efforts to keep you
                accessible to this platform, but we may suspend or close this
                platform indefinitely due to other commercial reasons such as
                system upgrades or other reasons that we cannot foresee and
                avoid.&nbsp;If SHOPASTRO is unavailable at any time or any
                period for any reason, we will not bear any responsibility,
                unless otherwise agreed between us and you.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>6. Intellectual Property and Ownership</strong>
              </p>
              <p>
                1)&nbsp; You understand and agree that any information you
                provide, upload, create, and publish on SHOPASTRO and the
                intellectual property rights of its derivative works will be
                granted free of charge to SHOPASTRO and its affiliates until the
                term of protection expires, irrevocable, with global and
                exclusive license use rights, SHOPASTRO and its affiliates have
                the right to collect evidence and file lawsuits against
                third-party infringements in their own name for commercial
                purposes.
              </p>
              <p>&nbsp;</p>
              <p>
                SHOPASTRO and its affiliates have the right to store, use, copy,
                revise, edit, publish, display, translate, distribute, promote,
                publish, distribute, information network dissemination and
                delete the above information content, and have the right to
                change the production and interpretation of the work, and have
                the right to, by format, media or technology currently known or
                developed in the future, incorporate the above-mentioned
                information into other works.
              </p>
              <p>&nbsp;</p>
              <p>
                2)&nbsp; With regard to violations of the rights specified in
                Article 7, paragraph 1, you agree that we have the right to
                protect the rights against violations of authorized content in
                our own name or in the name of your delegate. The protection
                methods include not limited to: monitoring infringements,
                sending rights protection letters, filing a lawsuit or
                arbitration, mediation, reconciliation, etc.&nbsp;In this case,
                you further agree that we have the right to make decisions on
                rights protection matters and implement them independently; at
                our request, you will actively provide necessary assistance to
                our rights protection activities (including but not limited to
                providing necessary rights protection Supporting documents,
                materials, information, etc.).
              </p>
              <p>&nbsp;</p>
              <p>
                3)&nbsp; You have the right to submit an application to
                SHOPASTRO, and publish the content submitted in SHOPASTRO on a
                third-party website or through others.&nbsp;You agree that
                SHOPASTRO will not be held responsible for any disputes over
                use.&nbsp;If you choose to display the content you submitted in
                SHOPASTRO on a third-party website, you should ensure that the
                content must be accompanied by a link to the SHOPASTRO website.
              </p>
              <p>&nbsp;</p>
              <p>
                4)&nbsp; You should ensure that all types of information
                published on SHOPASTRO do not involve infringement of
                third-party portraits, privacy, personal information,
                intellectual property rights or other legitimate rights and
                interests.&nbsp;Otherwise, SHOPASTRO has the right to take
                necessary measures at any time, including but not limited to
                deletion, disconnection, etc.&nbsp;If the content you uploaded
                has infringement issues or any other rights defects that cause
                rights disputes, you should resolve such disputes by yourself
                and bear corresponding responsibilities independently.&nbsp;If
                any third party claims to us the rights and interests of
                authorized content, you should actively defend against the third
                party for us, or provide us with necessary cooperation and
                assistance (including but not limited to providing and
                authorized content) in accordance with our requirements.
                Relevant rights certification documents, materials, information,
                etc.); if the content you upload has infringement or any other
                rights defects that cause us losses, you should compensate us
                for all the losses suffered and eliminate the above-mentioned
                authorized content The adverse effects of infringement or rights
                deficiencies have caused us.
              </p>
              <p>&nbsp;</p>
              <p>
                5)&nbsp; The various operating systems exhibited by SHOPASTRO
                are independently developed and operated by SHOPASTRO to provide
                technical support, and all data and information generated during
                the development and operation of SHOPASTRO services (including
                but not limited to technology, software, procedures, data and
                other information) (Including but not limited to text, images,
                pictures, photos, audio, video, graphics, colors, layout design,
                electronic documents) and all intellectual property rights
                (including But not limited to copyright, trademark rights,
                patent rights, trade secrets, etc.) and related rights and
                interests) enjoy all rights.&nbsp;All the legal rights and
                interests of the software upon which SHOPASTRO provides various
                services, such as the copyright and patent rights, trademarks,
                designs, page titles, button icons, commercial images, and
                script intellectual property rights used, belong to SHOPASTRO or
                related rights holders.&nbsp;All the intellectual property
                rights and related rights we enjoy will not be transferred due
                to any of your use.&nbsp;The compilation of all content on
                SHOPASTRO is the exclusive property of SHOPASTRO.
              </p>
              <p>&nbsp;</p>
              <p>
                6)&nbsp; Without our authorization, no one is allowed to use
                (including but not limited to copying, disseminating,
                displaying, mirroring, uploading, downloading, modifying,
                renting, and using any automated programs, scripts, software or
                equipment such as robots, crawlers, spiders, etc.) without
                authorization. Operations, etc.) and shall not modify, adapt, or
                translate software, technology, materials, etc. used in
                SHOPASTRO products and/or services, or create derivative
                works/products or derivatives related to SHOPASTRO products
                and/or services, or use SHOPASTRO products and services. Part or
                all of the service is provided to any third party with products
                and/or services, and the source code of SHOPASTRO products
                and/or services shall not be obtained through reverse
                engineering, decompilation, disassembly or other similar
                activities. Otherwise, we have the right Investigate your
                responsibilities, ask you to compensate us or others for the
                losses caused by this, and have the right to transfer the above
                actions to the relevant government departments as the case may
                be.
              </p>
              <p>&nbsp;</p>
              <p>
                7)&nbsp; Please do not use, delete, cover up or change any of
                our commercial logos (including our and affiliated company’s
                Logo, "SHOPASTRO", etc., text, graphics, and Its combination, as
                well as other logos, marks, product and service names), service
                marks, trade names, domain names, website names or other
                distinctive brand features (hereinafter referred to as
                "logos").&nbsp;Without our prior written consent, you may not
                display, use, or apply for trademark registration, domain name
                registration, etc., for the aforementioned logos in these terms,
                alone or in any combination, or express or imply that you have
                the right to display, use, or otherwise You have the right to
                deal with these signs, and you must not perform other actions
                that mistakenly make others think that you are associated with
                these signs.&nbsp;If you violate this agreement and use our
                above-mentioned logos to cause losses to us or others, you shall
                bear all legal responsibilities.
              </p>
              <p>&nbsp;</p>
              <p>
                8)&nbsp; When you use SHOPASTRO products and/or services, we
                only grant you a revocable, limited, non-transferable and
                non-exclusive license to use.&nbsp;You can only use SHOPASTRO
                for the purpose of accessing/using SHOPASTRO products and/or
                services.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>
                  7. Links to Third-party Websites/Third-party Services
                </strong>
              </p>
              <p>
                1)&nbsp; You understand and understand that the links to any
                third-party website/third-party service on SHOPASTRO are not
                under our control. We have no control over the content of any
                linked website/service, including but not limited to any link
                contained in the linked website/service, or any link to the link
                No responsibility is assumed for any changes or updates to the
                website/service.&nbsp;We provide you with these links for
                reference only and does not mean that we endorse the content of
                the linked website or have any association with its
                operator.&nbsp;The service agreement between you and SHOPASTRO
                does not include your interaction with the linked website. You
                should carefully review the user agreement and privacy policy of
                any third-party website.
              </p>
              <p>&nbsp;</p>
              <p>
                2) Some articles on SHOPASTRO may contain links to other
                resources and businesses on the Internet.&nbsp;We provide
                relevant links and information to help you find and locate other
                Internet resources that may be of interest.&nbsp;But this does
                not mean that we have ownership of any product names, registered
                trademarks, logos, statutory or official seals or copyright
                signs in the link, or there is any authorized use or other
                relationship.&nbsp;Our responsibility for your use of SHOPASTRO
                is set out in the following section, please read and understand
                carefully.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>8. Personal Information Protection</strong>
              </p>
              <p>
                1)&nbsp; SHOPASTRO takes the protection of your personal
                information very seriously.&nbsp;SHOPASTRO hopes&nbsp;to provide
                you with a clear introduction to the protection and handling of
                users' personal information&nbsp;through the&nbsp;"SHOPASTRO
                Privacy Policy", so it is recommended that you read
                the&nbsp;"SHOPASTRO Privacy Policy" in its entirety.&nbsp;In
                addition, we will not sell or disclose your personal information
                to third parties without your explicit consent.
              </p>
              <p>&nbsp;</p>
              <p>
                2)&nbsp; For any communication services in SHOPASTRO, you should
                be careful to provide any personal information about you or your
                family, including but not limited to bulletin board services,
                chat areas, communities, and/or others designed to enable you to
                communicate with other users or the public Communication
                services (hereinafter referred to as "communication
                services").&nbsp;We cannot control or edit the content and
                information submitted by users or the public in any
                communication service.&nbsp;Therefore, as permitted by laws and
                regulations, we are not responsible for any communication
                services and any behaviors caused by your participation in any
                communication services.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>9. Changes to Terms or Conditions</strong>
              </p>
              <p>
                1)&nbsp; We reserve the right to change the website.&nbsp;If
                these changes will result in a significant reduction in the
                usability, benefits and functions of the website, we will notify
                all paying users 90 days in advance.&nbsp;In the case of other
                force majeure, third-party reasons, or SHOPASTRO's unpredictable
                and avoidable circumstances, we will issue a notice (including
                immediate notice) before the change takes effect.
              </p>
              <p>&nbsp;</p>
              <p>
                2)&nbsp; You understand and agree that your use of this website
                after the effective date of the agreement change will be deemed
                to have accepted the updated agreement.&nbsp;If you have any
                questions or comments on the changed content, you
                can&nbsp;contact us for feedback&nbsp;via shopastro@shopastro-inc.com.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>10. General Terms</strong>
              </p>
              <p>
                1) You understand and agree that there is no joint venture,
                partnership, employment or agency relationship between you and
                us.&nbsp;The performance of this agreement is subject to current
                laws and legal procedures.&nbsp;Nothing in this agreement will
                prejudice our right to comply with government, court, and law
                enforcement requests or requirements related to your use of this
                platform, or to provide or collect information related to your
                use of SHOPASTRO.
              </p>
              <p>&nbsp;</p>
              <p>
                2)&nbsp; According to relevant laws and regulations, if any part
                of this agreement is determined to be invalid or unenforceable,
                including but not limited to the disclaimer and limitation of
                liability, the invalid or unenforceable terms will be deemed
                invalid, and the remaining parts will continue to be valid.
              </p>
              <p>&nbsp;</p>
              <p>
                3)&nbsp; Unless otherwise specified, this agreement constitutes
                the entire agreement between you and us on this platform, and
                replaces all previous communications and written documents
                between you and us on this website.
              </p>
              <p>&nbsp;</p>
              <p>
                4)&nbsp; Without our written consent, you may not transfer any
                rights and obligations in this agreement in any form, otherwise
                we have the right to refuse to acknowledge and stop providing
                services under this agreement.
              </p>
              <p>&nbsp;</p>
              <p>
                5)&nbsp; The company's failure to implement or exercise any
                provisions of this agreement or any related rights does not
                constitute a waiver of such provisions or rights.&nbsp;Any
                rights not expressly granted in this agreement are
                reserved.&nbsp;We may send you notices through e-mail, express
                mail, platform announcements or other reasonable methods
                currently known or developed in the future, including notices
                about changes to terms and conditions.&nbsp;The printed version
                of the agreement, any notification in electronic form, will
                allow it to be used as evidence in judicial or administrative
                procedures or be applied to the same degree as this agreement.
              </p>
              <p>&nbsp;</p>
              <p>
                6)&nbsp; Both parties clearly hope that this agreement and all
                related documents will be written in Chinese.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>11. Application of Law, Jurisdiction and Others</strong>
              </p>
              <p>
                1)&nbsp; This agreement is signed in Yuhang District, Hangzhou
                City, Zhejiang Province, People's Republic of China.&nbsp;The
                establishment, entry into force, performance, interpretation and
                dispute resolution of this agreement shall be governed by the
                laws of the Mainland of the People’s Republic of China, and the
                application of other conflicts of laws and regulations is
                specifically excluded.
              </p>
              <p>&nbsp;</p>
              <p>
                2)&nbsp; If you have any dispute or dispute with us, you should
                first settle it through friendly negotiation; if the negotiation
                fails, you agree to submit the dispute or dispute to the
                Hangzhou Internet Court for settlement through litigation; if
                the subject of the dispute does not fall within the scope of the
                Guangzhou Internet Court’s acceptance according to law, you
                should submit this agreement The people’s court with
                jurisdiction over the place of signing is under the
                jurisdiction.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>12. Disclaimer</strong>
              </p>
              <p>
                The information, software, products and services contained in or
                provided by this platform may be inaccurate or typographical
                errors may occur.&nbsp;The information on the platform will be
                updated regularly.&nbsp;We and/or suppliers can improve and/or
                optimize this platform at any time.&nbsp;Some of our functions
                may provide you with information and suggestions on how to
                improve the store and enhance the user experience, but the above
                information and suggestions are for your reference only and
                should not be used for personal, medical, legal or financial
                decisions. You should consult a suitable professional To get
                specific recommendations that suit your situation.&nbsp;We will
                work hard to maintain the stability and usability of the
                website.
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>13. Contact</strong>
              </p>
              <p>
                1) If you have any questions, comments or suggestions about the
                content of this policy, you can contact the SHOPASTRO customer
                service email: shopastro@shopastro-inc.com;
              </p>
              <p>&nbsp;</p>
              <p>
                2)&nbsp; We have also set up a full-time department for personal
                information protection. You can get in touch with us in the
                following ways.
              </p>
              <p>
                2.1&nbsp;Email:shopastro@shopastro-inc.com
              </p>
              <p>
                2.2&nbsp;Common office address: Room 1701, Building 5, City of
                the Future, Cangqian Street, Yuhang District, Hangzhou City,
                Zhejiang Province (received)
              </p>
              <p>
                3) This Agreement is prepared Chinese and translations in other
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
