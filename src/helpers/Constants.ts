export class Constants {
  public static stsAuthority = process.env.REACT_APP_STS_AUTHORITY; //'https://demo.identityserver.io/'
  public static clientId = process.env.REACT_APP_CLIENT_ID; //'spa';  
  public static clientRoot = process.env.REACT_APP_CLIENT_ROOT; //'http://localhost:4200/';
  public static clientScope = process.env.REACT_APP_CLIENT_SCOPE; // 'openid profile email api';

  public static apiRoot = process.env.REACT_APP_API_ROOT; //'https://demo.identityserver.io/api/';
  public static authorizeUrl = process.env.REST_APP_AUTHORIZE_URL;
}
