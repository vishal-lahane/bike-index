export interface Bike {
  id: number;
  title: string | null | undefined;
  description: string | null;
  date_stolen: number;
  thumb: string | null;
  stolen_location: string | null;
}

export interface ContextTypeDef {
  bikes: Bike[];
  setBikes: React.Dispatch<React.SetStateAction<Bike[]>>;
  loader: boolean;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  stolenCount: number;
  setStolenCount: React.Dispatch<React.SetStateAction<number>>;
  pageCount: number;
  setPageCount: React.Dispatch<React.SetStateAction<number>>;
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
}
