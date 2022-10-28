import { useEffect, useState } from "react";

function SelectRegion({uploadFiles, setQuery}) {
  const [query, setQueryComponent] = useState("");

  // useEffect(() => {
  //   uploadFiles(query)
  // }, [query]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     uploadFiles(query)
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setQueryComponent(value);
    setQuery(value);
  };

  return (
    <div>
      <select
        id="region"
        value={query.region}
        onChange={handleChange}
        name="region"
      >
        <option value="">-- Choose --</option>
        <option value="Amazonas">Amazonas</option>
        <option value="Áncash">Áncash</option>
        <option value="Apurímac">Apurímac</option>
        <option value="Arequipa">Arequipa</option>
        <option value="Ayacucho">Ayacucho</option>
        <option value="Cajamarca">Cajamarca</option>
        <option value="Cusco">Cusco</option>
        <option value="Huancavelica">Huancavelica</option>
        <option value="Huánuco">Huánuco</option>
        <option value="Ica">Ica</option>
        <option value="Junín">Junín</option>
        <option value="La Libertad">La Libertad</option>
        <option value="Lambayeque">Lambayeque</option>
        <option value="Lima">Lima</option>
        <option value="Madre de Dios">Madre de Dios</option>
        <option value="Moquegua">Moquegua</option>
        <option value="Pasco">Pasco</option>
        <option value="Piura">Piura</option>
        <option value="Puno">Puno</option>
        <option value="San Martin">San Martín</option>
        <option value="Tacna">Tacna</option>
        <option value="Tumbes">Tumbes</option>
        <option value="Ucayali">Ucayali</option>
      </select>
    </div>
  );
}

export default SelectRegion;
