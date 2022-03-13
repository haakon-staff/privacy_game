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
                        By accepting this cateogry, you agree that the application can store your name untill the research project is completed, which will be june 2022.
                    </p>
                </label>
            </div>
            <div >
                <label>
                    <input name="gps" type="checkbox" checked={formProps.values.gps} onChange={() => formProps.setFieldValue("gps", !formProps.values.gps)} />
                    <b>GPS</b>
                    <p style={{ "margin-left": "1.3em", "margin-top":"0"}}>
                        By accepting this category, you allow the application to turn on the GPS and collect the GPS data while you use this site. The data will be stored until june 2022.
                    </p>
                </label>
            </div>
            <div >
                <label>
                    <input name="browserH" type="checkbox" checked={formProps.values.browserH} onChange={() => formProps.setFieldValue("browserH", !formProps.values.browserH)} />
                    <b>Browser history</b>
                    <p style={{ "margin-left": "1.3em", "margin-top":"0"}}>
                        By accepting this category, you allow the application to look at and fetch your broswer history. Meaning any logs or data than be linked to what activity you perform when surfing the internet.
                    </p>
                </label>
            </div>
            <div >
                <label>
                    <input name="searchH" type="checkbox" checked={formProps.values.searchH} onChange={() => formProps.setFieldValue("searchH", !formProps.values.searchH)} />
                    <b>Search history</b>
                    <p style={{ "margin-left": "1.3em", "margin-top":"0"}}>
                        By accepting this category, you allow the application to fetch and analyze your search history. Meaning any data than be related to what kind of searches you perfom when surfing the internet.
                    </p>
                </label>
            </div>
            <div >
                <label>
                    <input name="political" type="checkbox" checked={formProps.values.political} onChange={() => formProps.setFieldValue("political", !formProps.values.political)} />
                    <b>Political data</b>
                    <p style={{ "margin-left": "1.3em", "margin-top":"0"}}>
                        By accepting this category, you allow the application to analyze and collect any data that is related to your political preference. For instance, any data than can be related to what you voted in the last election, or what you will vote the next election.
                    </p>
                </label>
            </div>
            <div >
                <label>
                    <input name="preference" type="checkbox" checked={formProps.values.preference} onChange={() => formProps.setFieldValue("preference", !formProps.values.preference)} />
                    <b>Sexual preference</b>
                    <p style={{ "margin-left": "1.3em", "margin-top":"0"}}>
                        By accepting this category, you allow the application to fetch and analyze any data than can be linked or related to your sexual preference. 
                    </p>
                </label>
            </div>
        </div>
    )
}

export default ManageTos
