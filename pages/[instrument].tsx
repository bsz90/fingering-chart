import { useRouter } from "next/router";

export default function InstrumentFingeringChart() {
  const router = useRouter();
  const { instrument } = router.query;
  return (
    <div className="w-full h-screen">
      <div className="w-full flex justify-center items-center">
        <h1>{instrument} hi</h1>
      </div>
      <div></div>
    </div>
  );
}
