export interface ISkip {
  id: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  area: string;
  created_at: string;
  forbidden: boolean;
  hire_period_days: number;
  per_tonne_cost: number | null;
  postcode: string;
  price_before_vat: number;
  size: number;
  transport_cost: number | null;
  updated_at: string;
  vat: number;
}

export interface ISkipLisingProps {
  skip: ISkip;
  selected: number;
  setSelected: (id: number) => void;
}
