const locators = {
  LOGIN: {
    TF_ENVIRONMENT: "#workspace",
    TF_USERNAME: "#username",
    TF_PASSWORD: "#password",
    BTN_LOGIN: "#submit_button",
  },
  HOME: {
    PROFILE_WIDGET: ".profile-widget",
    TEXT_LOGIN: ".text-login",
  },
  MENU: {
    OPTION_LOCALS: '[href="/CenterWeb/serviceLocal"]',
  },
  LIST_LOCATIONS:{  
    BTN_NEW_LOCATION: '#addServiceLocal',
    TF_SEARCH: '#genericFilter',
    BTN_SEARCH: '#serviceLocalList_doSearch',
    TABLE_LOCATIONS: '.odd',
  },
  DETAIL_LOCATION: {
    TF_DESCRIPTION: '#serviceLocal_description',
    TF_CORPORATE_NAME: '#serviceLocal_corporateName',
    TF_STREET_TYPE: '#serviceLocal_streetType',
    TF_STREET: '#serviceLocal_street',
    TF_STREET_NUMBER: '#serviceLocal_streetNumber',
    TF_ZIP_CODE: '#serviceLocal_zipCode',
    BTN_SAVE: '#formServiceLocal_doSave'
  }   
}

export default locators
