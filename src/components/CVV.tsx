import {define} from '@react-form-builder/core';

const CVVFieldComponent = ({...props}) => {
    return (
        <div>
            <label>CVV</label>
            <input {...props} type="number" pattern="[0-9]{3,4}" />
        </div>
    )
}
export const CVVField = define(CVVFieldComponent, 'CVV')
    .name('CVV')
    .category('Secure Fields');

