import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';

type DispatchFunk = () => AppDispatch; // // ЧТО ЭТО ЗНАЧИТ?

export const useAppDispatch: DispatchFunk = useDispatch; // // ЧТО ЭТО ЗНАЧИТ?

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // // ЧТО ЭТО ЗНАЧИТ?