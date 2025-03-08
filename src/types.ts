type TStatus = "success" | "failure";

export type TSuccessMessage<T> = {
  status: TStatus;
  data: T;
  error?: string;
};

interface ISection {
  title: string;
  href: string;
}

interface IHeader {
  sections: ISection[];
}

export type THeaderSuccessMessage = TSuccessMessage<IHeader>;
