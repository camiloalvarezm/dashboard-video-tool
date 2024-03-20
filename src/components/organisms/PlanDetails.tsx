import Button from "../atoms/Button";
import Card from "../atoms/Card";
import BarDetails from "../molecules/BarDetails";

interface PlanDetailsProps {
  title: string;
  subtitle: string;
}

const PlanDetails = ({ title, subtitle }: PlanDetailsProps) => {
  return (
    <>
      <Card color="gray">
        <h3 className="text-sm font-semibold">{title}</h3>
        <span className="text-xs italic">{subtitle}</span>
        <div className="flex flex-col gap-3 mt-3 mb-4">
          <BarDetails
            barBgColor="lila"
            barFillColor="purple"
            barValue={75}
            title="Almacenamiento"
            details="23.5 GB / 1 TB"
          />
          <BarDetails
            barBgColor="lila"
            barFillColor="purple"
            barValue={60}
            title="Banda Mensual"
            details="3.4 GB / 5 TB"
          />
        </div>
        <Button size="sm" color="purple" textColor="white" title="Administrar Plan"></Button>
      </Card>
    </>
  );
};

export default PlanDetails;
