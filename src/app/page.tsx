'use client'
import { useState } from "react";
// import Image from "next/image";
import Header from "../../components/header";
import CustomCodeEditor from "../../components/contract-input";
import ResultsModal from "../../components/result-modal";
import { analyzeContract } from "../../utils/ai-prompt";
export default function Home(){

  const [contract, setContract]= useState('')
  const [results, setResults]=useState(null);
  const [isModalOpen, setIsModalOpen]=useState(false);
  const [loading, setLoading]=useState(false);
  const analyze= async()=>{
  //  console.log("Aman");
    setLoading(true)
     setIsModalOpen(true)
  await analyzeContract(contract,setResults,setLoading);
  }
  return(
     <main className="flex min-h-screen w-full flex-col items-center justify-between p-24">
<Header />
<CustomCodeEditor analyze={analyze} contract={contract} setContract={setContract} />
<ResultsModal 
        closeModal={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        results={results}
        loading={loading} fixIssues={function (): void {
          throw new Error("Function not implemented.");
        } }/>
</main>
);
}

