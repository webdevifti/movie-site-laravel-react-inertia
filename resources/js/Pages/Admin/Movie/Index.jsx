import React from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./Table";
const Index = ({auth,movies}) => {
  
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Manage Movies
        </h2>
      
      }
      btn={<Link className="btn btn-primary btn-sm" href={route('admin.movies.create')}>Add New</Link>}
    >
      <Head title="Manage Movies" />
      <div className="py-2">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white shadow-sm p-4">
            <Table
              movies={movies}
            />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Index