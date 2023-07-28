import React from 'react'

const FormField = ({LabelName, type, name, placeholder,value,
handleChange, isSurpriseMe, handleSurpriseMe}) => {
  return (
    <div>
      <div className= "flex items-center gap-2 mb-2">
      <label
      htmlFor={name}
      className="block texy-sm font-medium text-grey-900
      ">
     {LabelName} 
      </label>
      {isSurpriseMe && (
      <button type="button"
      onClick={handleSurpriseMe}
      className="font-semibold text-xs bg-[#ECECF1] py-1
      px-2 rounded-[5px] texy-black">
        Surprise me
      </button>
      )}
      </div>
      <input
      type={type}
      id={name}
      name={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
    </div>
  )
}

export default FormField;
