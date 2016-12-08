{"version":3,"sources":["webpack:///./client/pages/donate/index.jsx","webpack:///./client/components/alert.jsx?8dc6*","webpack:///./client/pages/donate/form.jsx","webpack:///./client/pages/donate/actions.js","webpack:///./client/pages/donate/constants.js","webpack:///./client/pages/donate/store.js","webpack:///./client/components/form/textarea-control.jsx"],"names":["Form","require","React","ReactDOM","Page","mainElement","render","window","document","getElementById","module","exports","parent","page","blastoff","propTypes","type","PropTypes","oneOf","onClose","func","message","string","Alert","close","props","Component","Actions","Button","ControlGroup","Spinner","Store","TextControl","TextareaControl","input","state","getState","unsubscribeStore","subscribe","onStoreChange","bind","name","focus","setState","event","preventDefault","stopPropagation","sendMessage","value","email","alert","success","error","formElements","c","hasError","help","loading","handleSubmit","ApiActions","Constants","data","post","SEND_MESSAGE","SEND_MESSAGE_RESPONSE","FluxConstant","set","ObjectAssign","ParseValidation","Redux","initialState","undefined","reducer","action","validation","response","err","createStore","ClassNames","disabled","bool","inputClasses","object","label","onChange","placeholder","rows"],"mappings":"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","file":"donate.min.js","sourcesContent":["/* global window */\r\n'use strict';\r\nconst Form = require('./form.jsx');\r\nconst React = require('react');\r\nconst ReactDOM = require('react-dom');\r\n\r\n\r\nclass Page {\r\n    static blastoff() {\r\n\r\n        this.mainElement = ReactDOM.render(\r\n            <Form />,\r\n            window.document.getElementById('app-mount')\r\n        );\r\n    }\r\n}\r\n\r\n\r\nmodule.exports = Page;\r\n\r\n\r\n/* $lab:coverage:off$ */\r\nif (!module.parent) {\r\n    window.page = Page;\r\n    Page.blastoff();\r\n}\r\n/* $lab:coverage:on$ */\r\n\n\n\n// WEBPACK FOOTER //\n// ./client/pages/donate/index.jsx","'use strict';\r\nconst React = require('react');\r\n\r\n\r\nconst propTypes = {\r\n    type: React.PropTypes.oneOf(['success', 'info', 'warning', 'danger']),\r\n    onClose: React.PropTypes.func,\r\n    message: React.PropTypes.string\r\n};\r\n\r\n\r\nclass Alert extends React.Component {\r\n    render() {\r\n\r\n        let close;\r\n\r\n        if (this.props.onClose) {\r\n            close = <button\r\n                type=\"button\"\r\n                className=\"close\"\r\n                onClick={this.props.onClose}>\r\n\r\n                &times;\r\n            </button>;\r\n        }\r\n\r\n        return (\r\n            <div className={`alert alert-${this.props.type}`}>\r\n                {close}\r\n                {this.props.message}\r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\nAlert.propTypes = propTypes;\r\n\r\n\r\nmodule.exports = Alert;\r\n\n\n\n// WEBPACK FOOTER //\n// ./client/components/alert.jsx","'use strict';\r\nconst Actions = require('./actions');\r\nconst Alert = require('../../components/alert.jsx');\r\nconst Button = require('../../components/form/button.jsx');\r\nconst ControlGroup = require('../../components/form/control-group.jsx');\r\nconst React = require('react');\r\nconst Spinner = require('../../components/form/spinner.jsx');\r\nconst Store = require('./store');\r\nconst TextControl = require('../../components/form/text-control.jsx');\r\nconst TextareaControl = require('../../components/form/textarea-control.jsx');\r\n\r\n\r\nclass Form extends React.Component {\r\n    constructor(props) {\r\n\r\n        super(props);\r\n\r\n        this.input = {};\r\n        this.state = Store.getState();\r\n    }\r\n\r\n    componentDidMount() {\r\n\r\n        this.unsubscribeStore = Store.subscribe(this.onStoreChange.bind(this));\r\n\r\n        if (this.input.name) {\r\n            this.input.name.focus();\r\n        }\r\n    }\r\n\r\n    componentWillUnmount() {\r\n\r\n        this.unsubscribeStore();\r\n    }\r\n\r\n    onStoreChange() {\r\n\r\n        this.setState(Store.getState());\r\n    }\r\n\r\n    handleSubmit(event) {\r\n\r\n        event.preventDefault();\r\n        event.stopPropagation();\r\n\r\n        Actions.sendMessage({\r\n            name: this.input.name.value(),\r\n            email: this.input.email.value(),\r\n            message: this.input.message.value()\r\n        });\r\n    }\r\n\r\n    render() {\r\n\r\n        let alert = [];\r\n\r\n        if (this.state.success) {\r\n            alert = <Alert\r\n                type=\"success\"\r\n                message=\"Success. We have received your Donation.\"\r\n            />;\r\n        }\r\n        else if (this.state.error) {\r\n            alert = <Alert\r\n                type=\"danger\"\r\n                message={this.state.error}\r\n            />;\r\n        }\r\n\r\n        let formElements;\r\n\r\n        if (!this.state.success) {\r\n            formElements = <fieldset>\r\n                <TextControl\r\n                    ref={(c) => (this.input.name = c)}\r\n                    name=\"name\"\r\n                    label=\"Your Name:\"\r\n                    hasError={this.state.hasError.name}\r\n                    help={this.state.help.name}\r\n                    disabled={this.state.loading}\r\n                />\r\n                <TextControl\r\n                    ref={(c) => (this.input.email = c)}\r\n                    name=\"email\"\r\n                    label=\"Your Email Address:\"\r\n                    hasError={this.state.hasError.email}\r\n                    help={this.state.help.email}\r\n                    disabled={this.state.loading}\r\n                />\r\n\r\n                <TextareaControl\r\n                    ref={(c) => (this.input.message = c)}\r\n                    name=\"message\"\r\n                    label=\"Donation Amount\"\r\n                    rows=\"1\"\r\n                    hasError={this.state.hasError.message}\r\n                    help={this.state.help.message}\r\n                    disabled={this.state.loading}\r\n                />\r\n                <ControlGroup hideLabel={true} hideHelp={true}>\r\n                    <Button\r\n                        type=\"submit\"\r\n                        inputClasses={{ 'btn-primary': true }}\r\n                        disabled={this.state.loading}>\r\n\r\n                        Submit\r\n                        <Spinner space=\"left\" show={this.state.loading} />\r\n                    </Button>\r\n                </ControlGroup>\r\n            </fieldset>;\r\n        }\r\n\r\n        return (\r\n            <section>\r\n                <h1 className=\"page-header\">Donate</h1>\r\n                <form onSubmit={this.handleSubmit.bind(this)}>\r\n                    {alert}\r\n                    {formElements}\r\n                </form>\r\n            </section>\r\n        );\r\n    }\r\n}\r\n\r\n\r\nmodule.exports = Form;\r\n\n\n\n// WEBPACK FOOTER //\n// ./client/pages/donate/form.jsx","'use strict';\r\nconst ApiActions = require('../../actions/api');\r\nconst Constants = require('./constants');\r\nconst Store = require('./store');\r\n\r\n\r\nclass Actions {\r\n    static sendMessage(data) {\r\n\r\n        ApiActions.post(\r\n            '/api/donate',\r\n            data,\r\n            Store,\r\n            Constants.SEND_MESSAGE,\r\n            Constants.SEND_MESSAGE_RESPONSE\r\n        );\r\n    }\r\n}\r\n\r\n\r\nmodule.exports = Actions;\r\n\n\n\n// WEBPACK FOOTER //\n// ./client/pages/donate/actions.js","'use strict';\r\nconst FluxConstant = require('flux-constant');\r\n\r\n\r\nmodule.exports = FluxConstant.set([\r\n    'SEND_MESSAGE',\r\n    'SEND_MESSAGE_RESPONSE'\r\n]);\r\n\n\n\n// WEBPACK FOOTER //\n// ./client/pages/donate/constants.js","'use strict';\r\nconst Constants = require('./constants');\r\nconst ObjectAssign = require('object-assign');\r\nconst ParseValidation = require('../../helpers/parse-validation');\r\nconst Redux = require('redux');\r\n\r\n\r\nconst initialState = {\r\n    loading: false,\r\n    success: false,\r\n    error: undefined,\r\n    hasError: {},\r\n    help: {}\r\n};\r\nconst reducer = function (state, action) {\r\n\r\n    if (action.type === Constants.SEND_MESSAGE) {\r\n        return ObjectAssign({}, state, {\r\n            loading: true\r\n        });\r\n    }\r\n\r\n    if (action.type === Constants.SEND_MESSAGE_RESPONSE) {\r\n        const validation = ParseValidation(action.response);\r\n\r\n        return ObjectAssign({}, state, {\r\n            loading: false,\r\n            success: !action.err,\r\n            error: validation.error,\r\n            hasError: validation.hasError,\r\n            help: validation.help\r\n        });\r\n    }\r\n\r\n    return state;\r\n};\r\n\r\n\r\nmodule.exports = Redux.createStore(reducer, initialState);\r\n\n\n\n// WEBPACK FOOTER //\n// ./client/pages/donate/store.js","'use strict';\r\nconst ClassNames = require('classnames');\r\nconst ControlGroup = require('./control-group.jsx');\r\nconst ObjectAssign = require('object-assign');\r\nconst React = require('react');\r\n\r\n\r\nconst propTypes = {\r\n    disabled: React.PropTypes.bool,\r\n    hasError: React.PropTypes.bool,\r\n    help: React.PropTypes.string,\r\n    inputClasses: React.PropTypes.object,\r\n    label: React.PropTypes.string,\r\n    name: React.PropTypes.string,\r\n    onChange: React.PropTypes.func,\r\n    placeholder: React.PropTypes.string,\r\n    rows: React.PropTypes.string,\r\n    value: React.PropTypes.string\r\n};\r\n\r\n\r\nclass TextareaControl extends React.Component {\r\n    focus() {\r\n\r\n        return this.input.focus();\r\n    }\r\n\r\n    value() {\r\n\r\n        return this.input.value;\r\n    }\r\n\r\n    render() {\r\n\r\n        const inputClasses = ClassNames(ObjectAssign({\r\n            'form-control': true\r\n        }, this.props.inputClasses));\r\n\r\n        return (\r\n            <ControlGroup\r\n                hasError={this.props.hasError}\r\n                label={this.props.label}\r\n                help={this.props.help}>\r\n\r\n                <textarea\r\n                    ref={(c) => (this.input = c)}\r\n                    className={inputClasses}\r\n                    name={this.props.name}\r\n                    rows={this.props.rows}\r\n                    placeholder={this.props.placeholder}\r\n                    value={this.props.value}\r\n                    disabled={this.props.disabled ? 'disabled' : undefined}\r\n                    onChange={this.props.onChange}\r\n                />\r\n            </ControlGroup>\r\n        );\r\n    }\r\n}\r\n\r\nTextareaControl.propTypes = propTypes;\r\n\r\n\r\nmodule.exports = TextareaControl;\r\n\n\n\n// WEBPACK FOOTER //\n// ./client/components/form/textarea-control.jsx"],"sourceRoot":""}