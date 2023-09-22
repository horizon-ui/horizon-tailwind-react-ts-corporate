import { Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/popover";
const PopoverHorizon = (props: {
  extra: string;
  trigger: JSX.Element;
  content: JSX.Element;
}) => {
  const { extra, trigger, content } = props;
  return (
    <Popover>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent
        className={`w-max rounded-md bg-white px-4 py-3 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none ${extra}`}
      >
        {content}
      </PopoverContent>
    </Popover>
  );
};

export default PopoverHorizon;
