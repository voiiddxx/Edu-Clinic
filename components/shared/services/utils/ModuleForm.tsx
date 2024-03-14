"use client"

import UpskillingModuleForm from "../UpskillingModuleForm"
  
  type ModuleFormProps = {
    id: string
    type:'ADD' | 'UPDATE'
    moduleId?: any
    categoryName:string
  }

const ModuleForm = ({id , type , moduleId , categoryName} : ModuleFormProps) => {




  return (
    <div>

      {
        categoryName=='Upskilling Courses' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Upskilling" />
          </div>
        )
      }
      {
        categoryName=='Competitive Exam Resources' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Competetive" />
          </div>
        )
      }
      {
        categoryName=='Placement opportunity' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Placement opportunity"  />
          </div>
        )
      }
      {
        categoryName=='Scholarships and Financial Aid' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Scholarships and Financial Aid"  />
          </div>
        )
      }
      {
        categoryName=='Health and Counseling Services' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Health and Counseling Services"  />
          </div>
        )
      }
      {
        categoryName=='Academic Advising' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Academic Advising"  />
          </div>
        )
      }
      {
        categoryName=='Project Funding' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Project Funding"  />
          </div>
        )
      }
      {
        categoryName=='Collaboration and Alumni' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Collaboration and Alumni"  />
          </div>
        )
      }
      {
        categoryName=='Internship and Training' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Internship and Training"  />
          </div>
        )
      }
   
    </div>
  )
}

export default ModuleForm
