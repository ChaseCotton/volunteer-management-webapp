  <div class="flex flex-col w-full max-w-xs mx-auto mt-8">
  <form id="loginForm">
    <p class="text-lg font-semibold mb-4">Sign up</p>
  
    <div class="form-control mb-4">
      <label for="fname" class="label">
        <span class="label-text">First Name</span>
      </label>
      <input type="name" id="fname" name="fname" placeholder="Enter your first name" class="input input-bordered w-full" required/>
    </div>
  
    <div class="form-control mb-4">
        <label for="lname" class="label">
            <span class="label-text">Last Name</span>
        </label>
        <input type="name" id="lname" name="lname" placeholder="Enter your last name" class="input input-bordered w-full" required/>
      </div>

      <div class="form-control mb-4">
        <!-- Flex container for Street and Apt fields -->
        <div class="flex space-x-4 mt-4">
            <div class="flex-1">
                <label for="street" class="label">
                    <span class="label-text">Street</span>
                </label>
                <input type="street" id="street" name="street" placeholder="Enter your street" class="input input-bordered w-full" required/>
            </div>

            <div class="flex-1">
                <label for="apt" class="label">
                    <span class="label-text">Apt</span>
                </label>
                <input type="apt" id="apt" name="apt" placeholder="apt number" class="input input-bordered w-full">
            </div>
        </div>
        <div class="flex space-x-4 mt-4">
            <div class="flex-1">
                <label for="zipcode" class="label">
                    <span class="label-text">Zipcode</span>
                </label>
                <input type="zipcode" id="zipcode" name="zipcode" placeholder="zipcode" class="input input-bordered w-full" required/>
            </div>

            <div class="flex-1">
                <label for="city" class="label">
                    <span class="label-text">City</span>
                </label>
                <input type="city" id="city" name="city" placeholder="City" class="input input-bordered w-full">
            </div>

            <div class="flex-1">
                <label for="state" class="label">
                    <span class="label-text">State</span>
                </label>
                <input type="state" id="state" name="state" placeholder="State" class="input input-bordered w-full">
            </div>
        </div>
      </div>

    <div class="form-control">
      <button class="btn btn-secondary w-full">
        <a href="/login/signup">Sign Up</a>
      </button>
    </div>
  </form>
  </div>