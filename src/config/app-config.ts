class AppConfig {
  readonly _CONFIG_DB_VENDOR: string = process.env.CONFIG_DB_VENDOR || '';
  readonly _JWT_SECRET: string = process.env.JWT_SECRET  || '';
  readonly _GITHUB_CLIENT_ID: string = process.env.GITHUB_CLIENT_ID  || '';
  readonly _GITHUB_CLIENT_SECRET: string = process.env.GITHUB_CLIENT_SECRET  || '';
  readonly _GOOGLE_FIREBASE_ADMIN_SDK: string = process.env.GOOGLE_FIREBASE_ADMIN_SDK  || '';

  private static instance: AppConfig;
  private constructor() {}

  static getInstance() {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }

    return AppConfig.instance;
  }

  get CONFIG_DB_VENDOR() {
    return this._CONFIG_DB_VENDOR;
  }

  get JWT_SECRET() {
    return this._JWT_SECRET;
  }

  get GITHUB_CLIENT_ID() {
    return this._GITHUB_CLIENT_ID;
  }

  get GITHUB_CLIENT_SECRET() {
    return this._GITHUB_CLIENT_SECRET;
  }

  get GOOGLE_FIREBASE_ADMIN_SDK() {
    return JSON.parse(this._GOOGLE_FIREBASE_ADMIN_SDK);
  }
}

export default AppConfig.getInstance();