export interface City {
  lc:             string;
  longitude:      number;
  latitude:       number;
  label:          string;
  hotels:         number;
  cc1:            string;
  timezone:       string;
  name:           string;
  b_max_los_data: BMaxLosData;
  dest_type:      string;
  type:           string;
  country:        string;
  dest_id:        string;
  city_name:      string;
  city_ufi:       number | null;
  region:         string;
  rtl:            number;
  image_url:      string;
  nr_hotels:      number;
  roundtrip:      string;
  landmark_type?: number;
}

export interface BMaxLosData {
  max_allowed_los:  number;
  is_fullon:        number;
  default_los:      number;
  extended_los:     number;
  has_extended_los: number;
  experiment:       string;
}
