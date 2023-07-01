import { useState } from "react";

function MainSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }
  return (
    <>
      <main>
        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Public Restrooms Search</h1>
              <p class="lead text-body-secondary">Search, Add public restrooms in your city!!</p>
              <p>
              <button type="button" class="btn btn-primary my-2" onClick={openModal}>Add Restroom</button>
              </p>
            </div>
          </div>
          {isModalOpen && <AddRestroomModal />}
        </section>
      </main>
    </>

  );
}

  function AddRestroomModal() {
    return (
      <div class="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default MainSection;