import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useMemo,
    useState,
} from "react";

interface Props {
    children?: ReactNode;
}

interface ContextType {
    eventId: string | null;
    setEventId: Dispatch<SetStateAction<string | null>> | null;
}

const defaultValue = {
    eventId: null,
    setEventId: null,
};

export const CartContext = createContext<ContextType>(defaultValue);

export const CartContextProvider = ({ children }: Props) => {
    const [eventId, setEventId] = useState<string | null>(null);

    const providerValue = useMemo(
        () => ({ eventId, setEventId }),
        [eventId, setEventId]
    );

    return (
        <CartContext.Provider value={providerValue}>
            {children}
        </CartContext.Provider>
    );
};
