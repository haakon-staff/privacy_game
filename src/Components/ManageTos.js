import React from 'react'

const ManageTos = ({ formProps }) => {
    return (
        <div>
            <p>
                Manage TOS
            </p>
            <div >
                <label>
                    <input name="name" type="checkbox" checked={formProps.values.name} onChange={() => formProps.setFieldValue("name", !formProps.values.name)} />
                    <b>Name</b>
                    <p style={{ "margin-left": "1.3em", "margin-top":"0"}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quam autem, corrupti alias sed ad possimus consequatur ratione optio harum dolores! Corrupti ducimus nostrum similique laudantium quisquam nam tenetur quis.
                    </p>
                </label>
            </div>
            <div >
                <label>
                    <input name="gps" type="checkbox" checked={formProps.values.gps} onChange={() => formProps.setFieldValue("gps", !formProps.values.gps)} />
                    <b>GPS</b>
                    <p style={{ "margin-left": "1.3em", "margin-top":"0"}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quam autem, corrupti alias sed ad possimus consequatur ratione optio harum dolores! Corrupti ducimus nostrum similique laudantium quisquam nam tenetur quis.
                    </p>
                </label>
            </div>
            <div >
                <label>
                    <input name="browserH" type="checkbox" checked={formProps.values.browserH} onChange={() => formProps.setFieldValue("browserH", !formProps.values.browserH)} />
                    <b>Browser history</b>
                    <p style={{ "margin-left": "1.3em", "margin-top":"0"}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quam autem, corrupti alias sed ad possimus consequatur ratione optio harum dolores! Corrupti ducimus nostrum similique laudantium quisquam nam tenetur quis.
                    </p>
                </label>
            </div>
            <div >
                <label>
                    <input name="searchH" type="checkbox" checked={formProps.values.searchH} onChange={() => formProps.setFieldValue("searchH", !formProps.values.searchH)} />
                    <b>Search history</b>
                    <p style={{ "margin-left": "1.3em", "margin-top":"0"}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quam autem, corrupti alias sed ad possimus consequatur ratione optio harum dolores! Corrupti ducimus nostrum similique laudantium quisquam nam tenetur quis.
                    </p>
                </label>
            </div>
            <div >
                <label>
                    <input name="political" type="checkbox" checked={formProps.values.political} onChange={() => formProps.setFieldValue("political", !formProps.values.political)} />
                    <b>Political data</b>
                    <p style={{ "margin-left": "1.3em", "margin-top":"0"}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quam autem, corrupti alias sed ad possimus consequatur ratione optio harum dolores! Corrupti ducimus nostrum similique laudantium quisquam nam tenetur quis.
                    </p>
                </label>
            </div>
            <div >
                <label>
                    <input name="preference" type="checkbox" checked={formProps.values.preference} onChange={() => formProps.setFieldValue("preference", !formProps.values.preference)} />
                    <b>Sexual preference</b>
                    <p style={{ "margin-left": "1.3em", "margin-top":"0"}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quam autem, corrupti alias sed ad possimus consequatur ratione optio harum dolores! Corrupti ducimus nostrum similique laudantium quisquam nam tenetur quis.
                    </p>
                </label>
            </div>
        </div>
    )
}

export default ManageTos
