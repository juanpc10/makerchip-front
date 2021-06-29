const FormattedMessage = require('react-intl').FormattedMessage;
const injectIntl = require('react-intl').injectIntl;
const intlShape = require('react-intl').intlShape;
const MediaQuery = require('react-responsive').default;
const connect = require('react-redux').connect;
const PropTypes = require('prop-types');
const React = require('react');

const FooterBox = require('../container/footer.jsx');
const LanguageChooser = require('../../languagechooser/languagechooser.jsx');

const frameless = require('../../../lib/frameless');
const getScratchWikiLink = require('../../../lib/scratch-wiki');

require('./footer.scss');

const Footer = props => (
    <FooterBox>
        <MediaQuery maxWidth={frameless.mobileIntermediate - 1}>
            <div className="lists">
                <dl>
                    <dd>
                        <a href="/about">
                            <FormattedMessage id="general.aboutScratch" />
                        </a>
                    </dd>
                    <dd>
                        <a href="https://www.scratchfoundation.org/opportunities">
                            <FormattedMessage id="general.jobs" />
                        </a>
                    </dd>
                    <dd>
                        <a href="/contact-us/">
                            <FormattedMessage id="general.contactUs" />
                        </a>
                    </dd>
                </dl>
                <dl>
                    <dd>
                        <a href="/terms_of_use">
                            <FormattedMessage id="general.termsOfUse" />
                        </a>
                    </dd>
                    <dd>
                        <a href="/privacy_policy">
                            <FormattedMessage id="general.privacyPolicy" />
                        </a>
                    </dd>
                    <dd>
                        <a href="/community_guidelines">
                            <FormattedMessage id="general.guidelines" />
                        </a>
                    </dd>
                </dl>
            </div>
        </MediaQuery>
        <MediaQuery minWidth={frameless.mobileIntermediate}>
            <div className="lists">
                <dl>
                    <dt>
                        <FormattedMessage id="general.about" />
                    </dt>
                    <dd>
                        <a href="/about">
                            <FormattedMessage id="general.aboutScratch" />
                        </a>
                    </dd>
                   
                    <dd>
                        <a href="/educators">
                            <FormattedMessage id="general.forEducators" />
                        </a>
                    </dd>
                  
            

                </dl>
                <dl>
                    <dt>
                        <FormattedMessage id="general.community" />
                    </dt>
                   
                </dl>

                <dl>
                    <dt>
                        <FormattedMessage id="general.support" />
                    </dt>
              
                    <dd>
                        <a href="/contact-us/">
                            <FormattedMessage id="general.contactUs" />
                        </a>
                    </dd>
                </dl>

                <dl>
                    <dt>
                        <FormattedMessage id="general.legal" />
                    </dt>
                    <dd>
                        <a href="/terms_of_use">
                            <FormattedMessage id="general.termsOfUse" />
                        </a>
                    </dd>
                    <dd>
                        <a href="/privacy_policy">
                            <FormattedMessage id="general.privacyPolicy" />
                        </a>
                    </dd>
                    <dd>
                        <a href="/DMCA">
                            <FormattedMessage id="general.dmca" />
                        </a>
                    </dd>
                </dl>

                <dl>
                    <dt>
                        <FormattedMessage id="footer.scratchFamily" />
                    </dt>
                </dl>
            </div>
        </MediaQuery>
        <LanguageChooser locale={props.intl.locale} />
    </FooterBox>
);

Footer.propTypes = {
    intl: intlShape.isRequired,
    scratchWikiLink: PropTypes.string
};

const mapStateToProps = (state, ownProps) => ({
    scratchWikiLink: getScratchWikiLink(ownProps.intl.locale)
});

const ConnectedFooter = connect(mapStateToProps)(Footer);
module.exports = injectIntl(ConnectedFooter);
