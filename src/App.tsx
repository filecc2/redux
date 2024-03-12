import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  incremented,
  decremented,
  incrementedBy,
  setToZero,
} from "./features/counter/counter-slices";
import { useFetchBreedsQuery } from "./features/cats/cats-api-slice";



function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const { data, isFetching } = useFetchBreedsQuery(10);
  const Loading = () => {
    return <section className="grid grid-cols-4 gap-2 p-2">
      {Array.from({ length: 10 }).map((_, index) => {
      return <div key={index} className="animate-pulse bg-gray-300 h-[250px] w-full rounded">
    
      </div>;
    }
    )}
    </section>
   
  }

  console.log(data)
  return (
    <>
      <div>
       {isFetching ? <Loading /> :  <p>{data?.length} cats breeds fetched</p>}
       <section className="grid grid-cols-4 gap-2 p-2">
       {data && data.map((breed) => {
        return <div className="relative" key={breed.id}>
          <p className="absolute bottom-0 p-2 bg-gradient-to-r from-white/50 to-transparent">{breed.name}</p>
            <img className="w-full h-full object-cover" src={breed.image.url} alt={breed.name} />
        </div>
       })}
       </section>
      </div>
      {count}
      <div className="card">
        <button onClick={() => dispatch(incremented())}>
          increment
        </button>
        <button onClick={() => dispatch(decremented())}>
          decrement
        </button>
        <button onClick={() => dispatch(incrementedBy(10))}>
          increment by 10
        </button>
        <button onClick={() => dispatch(setToZero())}>
          set to zero
        </button>
      </div>
     
    </>
  );
}

export default App;
