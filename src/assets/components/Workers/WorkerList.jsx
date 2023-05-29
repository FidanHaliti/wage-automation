import Card from "../UI/Card";

const WorkerList = (props) => {

  if(props.workers.length < 1){
    return;
  }

  const deleteWorker = (id) => {
    props.setWorkers(props.workers.filter((item) => item.id  !== id))
  }
  return (
    <Card className="mt-10">
      <ul>
        <li className="flex justify-between font-bold p-2">
          <span className="">Emri</span>
          <span className="">Paga</span>
        </li>

        {props.workers.map((worker) => (
          <li className="flex justify-between p-2 cursor-pointer hover:shadow-xl duration-500" key={worker.id} onClick={() => deleteWorker (worker.id)}>
            <span className="">{worker.name}</span>
            <span className="text-teal-700 font-medium">{worker.wage} </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WorkerList;
