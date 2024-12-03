import {rSuiteComponents} from '@react-form-builder/components-rsuite'
import {type CustomizationMap, BuilderView, FormBuilder} from '@react-form-builder/designer'

const components = rSuiteComponents.map(c => c.build())
const builderView = new BuilderView(components)

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

function CustomizedFormLayout() {
  return <FormBuilder view={builderView} customization={customizations} />
}

export default CustomizedFormLayout