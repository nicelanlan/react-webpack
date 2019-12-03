export type Diff<T extends string, U extends string> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T];

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type BasicProps<C, Removals extends keyof C = never> = Omit<C, Removals> & {
  className?: string;
  prefixCls?: string;
  style?: React.CSSProperties;
};

export type ColorsType = 'primary' | 'green' | 'red' | 'orange' | 'gray' | 'lightGray';

export as namespace CV;

interface DynamicConfig {
  endpoint?: string;
  sso?: { url: string; auth: string; logout: string };
  mapKey?: string;
  dxtUrl?: string;
}

interface IRoutesConfig {
  /** A pathname to redirect from. */
  from?: string;
  /** Path or route for browser */
  path?: string;
  /** Route component */
  component?: React.ComponentType<any | void>;
  /** Page title */
  title?: string;
  /** Redux state reducer object's key */
  reducerKey?: string;
  /** Redux state reducer object's value */
  reducer?: any;
  /** Whether exactly math the path */
  exact?: boolean;
  /** the resource key to match */
  authority?: Array<string>;
  /** if `true`, it will be invisible in sider menu */
  hideInMenu?: boolean;
  icon?: string;
  children?: Array<IRoutesConfig>;
}

interface Action {
  type: string;
  payload?: any;
}

interface ReduxState {
  enthusiasm?: number;
}
