import React, {
  ChangeEvent,
  useRef,
  useState,
  DragEvent,
  MouseEvent,
} from "react";
import SVGAtom from "../SVGAtom";
import * as svg from "../../../public/svg";

type Props = {
  className?: string;
  title: string;
  subTitle: string;
  iconName: keyof typeof svg;
  iconName2: keyof typeof svg;
  iconNameShow?: boolean;
  onFileChange: (files: any) => void;
};

const DragAndDropComponent = (props: Props) => {
  const { className, iconName, subTitle, title, iconName2, iconNameShow } =
    props;

  const [fileList, setFileList] = useState<any>([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onFileDrop = (files: FileList | null) => {
    if (files) {
      const newFiles = Array.from(files);
      const updatedList = [...fileList, ...newFiles];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    onFileDrop(e.dataTransfer.files);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onFileDrop(e.target.files);
  };

  const handleClick = (e: MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div
      className={`relative border-2 border-dashed border-gray-300 rounded-md p-4 ${
        isDragging ? "bg-gray-200" : ""
      } ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <label
        htmlFor="upload"
        className="flex items-center gap-3 cursor-pointer"
      >
        <SVGAtom iconName={iconName2} width={41} height={41} />
        <div className="flex flex-col gap-2 items-start">
          <h2 className="text-xs leading-5 font-medium text-black-100">
            {title}
          </h2>
          <p className="text-xs leading-5 font-normal text-grey-400 text-left">
            {subTitle}
          </p>
        </div>
        <input
          type="file"
          ref={inputRef}
          onChange={handleInputChange}
          name="upload"
          id="upload"
          className="hidden"
          multiple // Allow multiple files if desired
        />
      </label>
      {iconNameShow && (
        <SVGAtom iconName={iconName} width={24} height={24} color="white" />
      )}
    </div>
  );
};

export default DragAndDropComponent;
