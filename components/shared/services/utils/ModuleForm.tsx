"use client"

import UpskillingModuleForm from "../UpskillingModuleForm"
  
  type ModuleFormProps = {
    id: string
    type:'ADD' | 'UPDATE'
    moduleId?: any
    categoryName:string
    moduleCategoryId:string
  }

const ModuleForm = ({id , type , moduleId , categoryName , moduleCategoryId} : ModuleFormProps) => {




  return (
    <div>

      {
        categoryName=='Upskilling Courses' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Upskilling" moduledategoryid={moduleCategoryId}  />
          </div>
        )
      }
      {
        categoryName=='Competitive Exam Resources' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Competetive" moduledategoryid={moduleCategoryId} />
          </div>
        )
      }
      {
        categoryName=='Placement opportunity' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Placement opportunity" moduledategoryid={moduleCategoryId}  />
          </div>
        )
      }
      {
        categoryName=='Scholarships and Financial Aid' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Scholarships and Financial Aid" moduledategoryid={moduleCategoryId}  />
          </div>
        )
      }
      {
        categoryName=='Health and Counseling Services' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Health and Counseling Services" moduledategoryid={moduleCategoryId}  />
          </div>
        )
      }
      {
        categoryName=='Alumni Mentoring' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Academic Advising" moduledategoryid={moduleCategoryId}  />
          </div>
        )
      }
      {
        categoryName=='Project Funding' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Project Funding" moduledategoryid={moduleCategoryId} />
          </div>
        )
      }
      {
        categoryName=='Collaboration and Alumni' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Collaboration and Alumni" moduledategoryid={moduleCategoryId} />
          </div>
        )
      }
      {
        categoryName=='Internship and Training' && (
          <div>
            <UpskillingModuleForm id={id} type="ADD" moduleId={moduleId} key={id} formType="Internship and Training" moduledategoryid={moduleCategoryId}  />
          </div>
        )
      }
   
    </div>
  )
}

export default ModuleForm
