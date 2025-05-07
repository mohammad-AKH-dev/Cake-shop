import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type productBoxType = {
  id: number;
  title: string;
  discount?: string;
  price: string ;
  score: number;
  count: number;
  category: "cakes" | "puddings" | "Sweets";
  sources: string[];
};

type basketType = {
  basket: productBoxType[] | [];
  setBasket: Dispatch<SetStateAction<productBoxType[]>>;
};

export const basketContext = createContext<basketType | null>(null);


export const BasketContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [basket, setBasket] = useState<productBoxType[]>([]);

  const localStorageBasket: productBoxType[] = JSON.parse(localStorage.getItem("carts") || '[]');

  useEffect(() => {
        setBasket(localStorageBasket)
  },[])

  useEffect(() => {
      localStorage.setItem('carts',JSON.stringify(basket))
  },[basket])

  return (
    <basketContext.Provider value={{ basket, setBasket }}>
      {children}
    </basketContext.Provider>
  );
};
