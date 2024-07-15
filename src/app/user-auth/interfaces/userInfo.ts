export interface userInfo {
  id:                    number;
  firstName:             string;
  lastName:              string;
  email:                 string;
  password:              string;
  username:              string;
  role:                  string;
  country:               string;
  enabled:               boolean;
  authorities:           Authority[];
  accountNonLocked:      boolean;
  credentialsNonExpired: boolean;
  accountNonExpired:     boolean;
  phone:                 string;
  age:                   number;
}

export interface Authority {
  authority: string;
}
