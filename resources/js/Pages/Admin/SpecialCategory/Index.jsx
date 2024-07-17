import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";
import Table from "./Table";
const Index = ({auth,special_categories}) => {
    const [isEdit, setEdit] = useState(false);
    const [editvalue, setEditValues] = useState({
      category: "",
      id: "",
    });
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Manage Special Category
        </h2>
      }
    >
      <Head title="Manage Categories" />
      <div className="py-4">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white shadow-sm p-4">
            {isEdit ? (
              <EditForm
                editvalue={editvalue}
                setEditValues={setEditValues}
                setEdit={setEdit}
              />
            ) : (
              <CreateForm />
            )}
          </div>
        </div>
      </div>
      <div className="py-2">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white shadow-sm p-4">
            <Table
              categories={special_categories}
              setEditValues={setEditValues}
              setEdit={setEdit}
            />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Index