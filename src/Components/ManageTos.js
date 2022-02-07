import React from 'react'

const ManageTos = ({formProps}) => {
    return (
        <div>
            <p>
                Manage TOS
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
                <div style={{display: "flex", flexDirection: "row", textAlign: "center"}}>
                    <p>Browser history</p>
                    <input style={{margin: "20px", zoom: 2}} name="browserH" type="checkbox" checked={formProps.values.browserH} onChange={() => formProps.setFieldValue("browserH", !formProps.values.browserH)} />
                </div>
                <div style={{display: "flex", flexDirection: "row", textAlign: "center"}}>
                    <p>Search history</p>
                    <input style={{margin: "20px", zoom: 2}} name="searchH" type="checkbox" checked={formProps.values.searchH} onChange={() => formProps.setFieldValue("searchH", !formProps.values.searchH)} />
                </div>
                <div style={{display: "flex", flexDirection: "row", textAlign: "center"}}>
                    <p>Political data</p>
                    <input style={{margin: "20px", zoom: 2}} name="political" type="checkbox" checked={formProps.values.political} onChange={() => formProps.setFieldValue("political", !formProps.values.political)} />
                </div>
                <div style={{display: "flex", flexDirection: "row", textAlign: "center"}}>
                    <p>Sexual preference</p>
                    <input style={{margin: "20px", zoom: 2}} name="preference" type="checkbox" checked={formProps.values.preference} onChange={() => formProps.setFieldValue("preference", !formProps.values.preference)} />
                </div>
            </ul>
        </div>
    )
}

export default ManageTos
