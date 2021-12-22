import React from 'react'

const ManageTos = ({formProps}) => {
    console.log(formProps.values);
    return (
        <div>
            <p>
                Mange TOS
            </p>
            <ul>
                <div style={{display: "flex", flexDirection: "row", textAlign: "center"}}>
                    <p>Name</p>
                    <input style={{margin: "20px", zoom: 2}} name="name" type="checkbox" checked={formProps.values.name} onChange={() => formProps.setFieldValue("name", !formProps.values.name)} />
                </div>
                <div style={{display: "flex", flexDirection: "row", textAlign: "center"}}>
                    <p>GPS</p>
                    <input style={{margin: "20px", zoom: 2}} name="gps" type="checkbox" checked={formProps.values.gps} onChange={() => formProps.setFieldValue("gps", !formProps.values.gps)} />
                </div>
            </ul>
        </div>
    )
}

export default ManageTos
