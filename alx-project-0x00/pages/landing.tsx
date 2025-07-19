import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
        <div className="flex flex-col gap-3">
        {/* Sizes */}
        <Button title="Small Button" styles="text-sm" />
        <Button title="Medium Button" styles="text-base" />
        <Button title="Large Button" styles="text-xl" />

        {/* Shapes */}
        <Button title="Rounded SM" styles="rounded-sm" />
        <Button title="Rounded MD" styles="rounded-md" />
        <Button title="Rounded Full" styles="rounded-full rounded-lg" />
      </div>
    </div>
  )
}
export default Landing