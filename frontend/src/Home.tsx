import { useContext } from "react"
import { Container } from "./components/container"
import { Form } from "./components/form"
import { MapPage } from "./components/mapPage/mapPage"
import { DriverList } from "./components/driverList"
import { Button } from "./components/button"
import { ContextApi } from "./useContext/contextApi"
import { SubContainer } from "./components/sub-container/sub-container"

function App() {
  const { formDataLocation, setFormDataLocation } = useContext(ContextApi);

  return(
    <>
    <Container>
      <div className="flex flex-col w-full h-full justify-around p-6 gap-2" >
        <h1 className="text-center text-2xl font-semibold">Para onde você quer ir?</h1>
        <div className="flex flex-col gap-2 flex-1 w-full">
          <SubContainer variant="overflow-y-auto">
            {!formDataLocation?.userId ? (
              <Form func={setFormDataLocation} />
            ) : (
              <DriverList />
            )}
            {formDataLocation?.userId && <div className="w-full flex justify-end">
              <Button labelName="retornar" funClick={()=>setFormDataLocation(undefined)}/>
            </div>}
          </SubContainer>

          <MapPage />
        </div>
      </div>
      </Container>
    </>
  )
}

export default App
