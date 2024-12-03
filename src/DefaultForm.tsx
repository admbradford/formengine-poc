import {rSuiteComponents} from '@react-form-builder/components-rsuite'
import {BuilderView, FormBuilder} from '@react-form-builder/designer'

const components = rSuiteComponents.map(c => c.build())
const builderView = new BuilderView(components)

function DefaultForm() {
  return <FormBuilder view={builderView}/>
}

export default DefaultForm