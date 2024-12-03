import {type CustomizationMap, BuilderView, FormBuilder} from '@react-form-builder/designer'
import { CVVField } from './components/CVV'

const builderView = new BuilderView([CVVField.build()])

const customizations: CustomizationMap = {
    LeftPanel_Nav: {
        customRenderer: () => <></>
    },
    Actions_Tab: {
        customRenderer: () => <></>
    },
    Rules_Tab: {
        customRenderer: () => <></>
    }
}

function CustomFields() {
  return <FormBuilder view={builderView} customization={customizations} />
}

export default CustomFields