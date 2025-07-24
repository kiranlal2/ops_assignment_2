
type Props = {
  carsBrands?: string[];
  names: string[];
  employees?: {
    name: string;
    age: number;
    position: string;
  }
}

export default function About() {

  const carsBrands = ['BMW', 'Audi', 'TATA', 'Rolls Royce', 'lamborghini', 'Jaguar', 'Tesla']
  const names = ['Amun', 'Hazeil', 'Adon', 'Demiurges', 'Nish', 'Kiran']
  const datas = [...carsBrands, ...names]

  const employees = {
    fname: 'John',
    lname: 'Doe',
  }


  return (
    <div>
        <p>{datas}</p>
        {/* <p>{...employees}</p> */}
        <p>{`Name: ${name}, Age: ${age}, Position: ${position}`}</p>
        <h1>About</h1>
    </div>
  )
}
